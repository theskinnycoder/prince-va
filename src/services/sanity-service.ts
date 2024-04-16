import type { Album } from "@/lib/types";
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
}
