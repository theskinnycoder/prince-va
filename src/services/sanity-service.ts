import type { Album, LinkType } from "@/lib/types";
import { groq, type SanityClient } from "next-sanity";

export default class SanityService {
	private readonly client: SanityClient;

	constructor(client: SanityClient) {
		this.client = client;
	}

	getAlbums = async () => {
		const data = await this.client.fetch<
			Array<Album>
		>(groq`*[_type == "album"]|order(orderRank){
			"id": _id,
			title,
			description,
			url,
			coverArt,
			"backgroundVideo": backgroundVideo.asset->url,
			releaseDate,
		}`);

		return data;
	};

	getSocialLinks = async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "socialLink"]|order(orderRank){
			label,
			href,
		}`);

		return data;
	};

	getMusicLinks = async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "musicLink"]|order(orderRank){
			label,
			href,
		}`);

		return data;
	};

	getMediaLinks = async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "mediaLink"]|order(orderRank){
			label,
			href,
		}`);

		return data;
	};

	getServiceLinks = async () => {
		const data = await this.client.fetch<
			Array<LinkType>
		>(groq`*[_type == "serviceLink"]|order(orderRank){
			label,
			href,
		}`);

		return data;
	};
}
