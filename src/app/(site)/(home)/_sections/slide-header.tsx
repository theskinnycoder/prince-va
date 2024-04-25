"use client";

import type { Album } from "@/lib/types";
import { useSnapshot } from "valtio/react";
import { carouselStore } from "../../_components/carousel/store";

interface SlideHeaderProps {
	data: Array<Album>;
}

export default function SlideHeader({ data }: SlideHeaderProps) {
	const { currentSlide } = useSnapshot(carouselStore);

	return (
		<div
			key={`${data[currentSlide].title}-${data[currentSlide].description}`}
			className="absolute top-0 z-[10] flex h-[50dvh] items-center pt-[64px] text-center uppercase max-sm:-mt-12 sm:h-[25dvh] sm:pt-[82px]"
		>
			<div className="flex flex-col gap-y-2">
				<div className="text-sm font-medium max-xl:leading-none sm:text-base">
					{data[currentSlide].title}
				</div>
				<h2 className="text-[0.7rem] opacity-90 max-xl:leading-none sm:text-xs">
					{data[currentSlide].description}
				</h2>
			</div>
		</div>
	);
}
