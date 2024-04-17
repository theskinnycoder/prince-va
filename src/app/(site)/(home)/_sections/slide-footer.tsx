"use client";

import type { Album } from "@/lib/types";
import { useSnapshot } from "valtio/react";
import { carouselStore } from "../../_components/carousel/store";

interface SlideFooterProps {
	data: Array<Album>;
}

export default function SlideFooter({ data }: SlideFooterProps) {
	const { currentSlide } = useSnapshot(carouselStore);

	return (
		<div
			key={data[currentSlide].title}
			className="absolute bottom-0 z-[10] flex h-[30dvh] items-center pb-[86px] text-center uppercase sm:h-[25dvh] sm:pb-[100px]"
		>
			<h3 className="text-sm font-normal text-white max-xl:leading-none">
				{new Date().getFullYear() -
					new Date(data[currentSlide].releaseDate).getFullYear() >
				0
					? "Released"
					: "Releasing"}{" "}
				{new Date(data[currentSlide].releaseDate).toLocaleDateString("en-US", {
					month: "short",
					day: "numeric",
					year: "numeric",
				})}
			</h3>
		</div>
	);
}
