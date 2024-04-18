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
			className="absolute top-0 z-[10] flex h-[50dvh] items-center pt-[64px] text-center uppercase sm:h-[25dvh] sm:pt-[82px]"
		>
			<div className="flex flex-col gap-y-0.5">
				<div className="text-sm max-xl:leading-none">
					{data[currentSlide].title}
				</div>
				<h2 className="text-2xl max-xl:leading-none">
					{data[currentSlide].description}
				</h2>
			</div>
		</div>
	);
}
