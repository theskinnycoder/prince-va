"use client";

import { useSnapshot } from "valtio/react";
import { Card } from "../_components/card";
import { Carousel } from "../_components/carousel";
import { carouselStore } from "../_components/carousel/store";

const data = [
	{
		title: "Explore",
		description: "Utopia World",
		name: "GOD'S COUNTRY VIDEO",
		src: "https://cdn.sanity.io/images/vfp8z5al/production/c134c13cbcff06da7e8302c96b69638704112c07-2000x2428.jpg?w=2400&q=80&fit=clip&auto=format",
		bgVideo:
			"https://cdn.sanity.io/files/vfp8z5al/production/ec6fe4045e14fa6a29abb5693fa7deea7b536e33.mp4",
	},
	{
		title: "Explore",
		description: "Utopia World",
		name: "MODERN JAM VIDEO",
		src: "https://cdn.sanity.io/images/vfp8z5al/production/21f5deca90b412f1135ca527505050a625aa0a0b-2000x2428.jpg?w=2400&q=80&fit=clip&auto=format",
		bgVideo:
			"https://cdn.sanity.io/files/vfp8z5al/production/2c81507407f9b9bd97a6ddaa159972a2425db4f3.mp4",
	},
	{
		title: "Explore",
		description: "Utopia World",
		name: "HYAENA VIDEO",
		src: "https://cdn.sanity.io/images/vfp8z5al/production/d93406a8e08682a5ad3f1194ebb9fb47d9999a9a-2000x2428.jpg?w=2400&q=80&fit=clip&auto=format",
		bgVideo:
			"https://cdn.sanity.io/files/vfp8z5al/production/b5f4f12d82ddc67efc50cd10b6108005e486f785.mp4",
	},
];

export default function Home() {
	const { currentSlide } = useSnapshot(carouselStore);

	return (
		<main className="relative flex h-screen flex-col items-center justify-center">
			<video
				key={data[currentSlide].bgVideo}
				className="absolute inset-0 h-screen w-full object-cover opacity-50 duration-[888ms] ease-in"
				preload="preload"
				playsInline
				autoPlay
				muted
				loop
			>
				<source
					type="video/mp4"
					src={data[currentSlide].bgVideo}
				/>
			</video>

			<div
				key={`${data[currentSlide].title}-${data[currentSlide].description}`}
				className="absolute top-0 z-[10] flex h-[26.5dvh] items-center pt-[64px] text-center uppercase sm:h-[25vh] sm:pt-[82px]"
			>
				<div className="flex flex-col gap-y-0.5">
					<div className="text-sm">{data[currentSlide].title}</div>
					<h2 className="text-2xl">{data[currentSlide].description}</h2>
				</div>
			</div>

			<Carousel
				slides={data.map((slide) => (
					<Card
						href="/"
						src={slide.src}
						alt={slide.name}
						buttonText="Explore"
						key={slide.name}
						className="embla__slide__number"
					/>
				))}
				options={{ loop: true }}
			/>

			<div
				key={data[currentSlide].name}
				className="absolute bottom-0 z-[10] flex h-[26.5dvh] items-center pb-[86px] text-center uppercase sm:h-[25vh] sm:pb-[100px]"
			>
				<h3 className="text-sm font-normal text-white">
					{data[currentSlide].name}
				</h3>
			</div>
		</main>
	);
}
