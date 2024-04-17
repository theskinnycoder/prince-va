import type { Album, LinkType } from "@/lib/types";
import { groq, type SanityClient } from "next-sanity";
import { cache } from "react";

export default class SanityService {
	private readonly client: SanityClient;

	constructor(client: SanityClient) {
		this.client = client;
	}

	getAlbums = cache(async () => {
		const data = await this.client.fetch<Array<Album>>(groq`*[_type == "album"]{
			"id": _id,
			title,
			description,
			url,
			coverArt,
			"backgroundVideo": backgroundVideo.asset->url,
			releaseDate,
		}`);

		return data;
	});

	getSocialLinks = cache(async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "socialLink"]{
			label,
			href,
		}`);

		return data;
	});

	getMusicLinks = cache(async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "musicLink"]{
			label,
			href,
		}`);

		return data;
	});

	getMediaLinks = cache(async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "mediaLink"]{
			label,
			href,
		}`);

		return data;
	});
}
