import type { Album } from "@/lib/types";
import { Card } from "../../_components/card";
import { Carousel } from "../../_components/carousel";

interface MainCarouselProps {
	data: Array<Album>;
}

export default function MainCarousel({ data }: MainCarouselProps) {
	return (
		<Carousel
			slides={data.map((slide) => (
				<Card
					href={slide.url}
					image={slide.coverArt}
					alt={slide.title}
					buttonText="Explore"
					key={slide.title}
					className="embla__slide__number"
				/>
			))}
			options={{ loop: true }}
		/>
	);
}
