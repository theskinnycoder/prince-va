import { proxy } from "valtio";

type CarouselStore = {
	currentSlide: number;
};

export const carouselStore = proxy<CarouselStore>({
	currentSlide: 0,
});
