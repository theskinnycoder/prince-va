import type { Image } from "sanity";

export type CustomImage = Image & {
	alt: string;
};

export type Album = {
	title: string;
	description: string;
	url: string;
	coverArt: CustomImage;
	backgroundVideo: string;
	releaseDate: string;
};
