"use client";

import type { Album } from "@/lib/types";
import { useSnapshot } from "valtio/react";
import { carouselStore } from "../../_components/carousel/store";

interface BgVideoProps {
	data: Array<Album>;
}

export default function BgVideo({ data }: BgVideoProps) {
	const { currentSlide } = useSnapshot(carouselStore);

	return (
		<video
			key={data[currentSlide].backgroundVideo}
			className="absolute inset-0 h-screen w-full object-cover opacity-50 duration-[888ms] ease-in"
			preload="preload"
			playsInline
			autoPlay
			muted
			loop
		>
			<source
				type="video/mp4"
				src={data[currentSlide].backgroundVideo}
			/>
		</video>
	);
}
