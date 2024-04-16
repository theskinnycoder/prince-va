import { type SchemaPluginOptions } from "sanity";
import { singletonTypes } from "./lib/singleton";
import album from "./schemaTypes/album";
import info, { quickLink } from "./schemaTypes/singletons/info";

export const schema: SchemaPluginOptions = {
	types: [quickLink, info, album],

	templates: (templates) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
