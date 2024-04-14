"use client";

import type { EmblaCarouselType } from "embla-carousel";
import {
	type ButtonHTMLAttributes,
	type DetailedHTMLProps,
	useCallback,
	useEffect,
	useState,
} from "react";

type UsePrevNextButtonsType = {
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
	onPrevButtonClick: () => void;
	onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
	emblaApi: EmblaCarouselType | undefined,
	onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
		if (onButtonClick) onButtonClick(emblaApi);
	}, [emblaApi, onButtonClick]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
		if (onButtonClick) onButtonClick(emblaApi);
	}, [emblaApi, onButtonClick]);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);

		return () => {
			emblaApi.off("reInit", onSelect);
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, onSelect]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowLeft":
					onPrevButtonClick();
					break;
				case "ArrowRight":
					onNextButtonClick();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onPrevButtonClick, onNextButtonClick]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

type CarouselButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function PrevButton(props: CarouselButtonProps) {
	return (
		<button
			{...props}
			className="fixed inset-y-0 left-0 z-[9] h-full w-[10vw] cursor-w-resize touch-manipulation select-none appearance-none opacity-0 sm:w-[24vw]"
			type="button"
		/>
	);
}

export function NextButton(props: CarouselButtonProps) {
	return (
		<button
			{...props}
			className="fixed inset-y-0 right-0 z-[9] h-full w-[10vw] cursor-e-resize touch-manipulation select-none appearance-none opacity-0 sm:w-[24vw]"
			type="button"
		/>
	);
}
