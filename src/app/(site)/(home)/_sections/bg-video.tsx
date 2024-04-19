"use client";

import type { Album } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio/react";
import { carouselStore } from "../../_components/carousel/store";

interface BgVideoProps {
	data: Array<Album>;
}

export default function BgVideo({ data }: BgVideoProps) {
	const { currentSlide } = useSnapshot(carouselStore);

	return (
		<AnimatePresence key={data[currentSlide].backgroundVideo}>
			<motion.video
				key={data[currentSlide].backgroundVideo}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				exit={{ opacity: 0 }}
				className="absolute inset-0 h-screen w-full object-cover opacity-50 duration-700 ease-in"
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
			</motion.video>
		</AnimatePresence>
	);
}
