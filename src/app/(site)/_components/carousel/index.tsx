"use client";

import { numberWithinRange } from "@/lib/utils";
import type {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode, useCallback, useEffect, useRef } from "react";
import { useSnapshot } from "valtio";
import { NextButton, PrevButton, usePrevNextButtons } from "./buttons";
import { carouselStore } from "./store";

interface CarouselProps {
	slides: ReactNode[];
	options?: EmblaOptionsType;
}

const TWEEN_FACTOR_BASE = 0.52;

export function Carousel(props: CarouselProps) {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const { currentSlide } = useSnapshot(carouselStore);

	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector(".embla__slide__number") as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenOpacity = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === "scroll";

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const opacity = numberWithinRange(tweenValue, 0, 1).toString();
					emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
				});
			});
		},
		[],
	);

	const tweenScale = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === "scroll";

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
					const scale = numberWithinRange(tweenValue, 0, 1).toString();
					const tweenNode = tweenNodes.current[slideIndex];
					tweenNode.style.transform = `scale(${scale})`;
				});
			});
		},
		[],
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenScale(emblaApi);
		tweenOpacity(emblaApi);

		const onSelect = () => {
			carouselStore.currentSlide = emblaApi.selectedScrollSnap();
		};

		emblaApi.on("select", onSelect);

		emblaApi
			.on("reInit", setTweenNodes)
			.on("reInit", setTweenFactor)
			.on("reInit", tweenScale)
			.on("scroll", tweenScale)
			.on("reInit", tweenOpacity)
			.on("scroll", tweenOpacity);

		return () => {
			emblaApi.off("reInit", setTweenNodes);
			emblaApi.off("reInit", setTweenFactor);
			emblaApi.off("reInit", tweenScale);
			emblaApi.off("scroll", tweenScale);
			emblaApi.off("reInit", tweenOpacity);
			emblaApi.off("scroll", tweenOpacity);
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, setTweenFactor, setTweenNodes, tweenScale]);

	return (
		<section className="relative size-full">
			<div
				className="absolute inset-x-0 top-1/2 -translate-y-1/2 transform overflow-hidden"
				ref={emblaRef}
			>
				<div
					className="flex touch-pan-y"
					style={{
						marginLeft: "calc(var(--slide-spacing) * -1)",
						backfaceVisibility: "hidden",
					}}
				>
					{slides.map((slide, idx) => (
						<div
							style={{
								flex: "0 0 var(--slide-size)",
								paddingLeft: "var(--slide-spacing)",
							}}
							key={idx}
						>
							{slide}
						</div>
					))}
				</div>
			</div>

			<PrevButton
				onClick={onPrevButtonClick}
				disabled={prevBtnDisabled}
			/>

			<NextButton
				onClick={onNextButtonClick}
				disabled={nextBtnDisabled}
			/>
		</section>
	);
}
