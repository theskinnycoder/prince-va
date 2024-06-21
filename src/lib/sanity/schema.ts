import { type SchemaPluginOptions } from "sanity";
import album from "./schemaTypes/album";
import mediaLink from "./schemaTypes/media-link";
import musicLink from "./schemaTypes/music-link";
import serviceLink from "./schemaTypes/service-link";
import info from "./schemaTypes/singletons/info";
import socialLink from "./schemaTypes/social-link";
import { singletonTypes } from "./utils/singleton";

export const schema: SchemaPluginOptions = {
	types: [info, album, musicLink, serviceLink, mediaLink, socialLink],

	templates: (templates) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
