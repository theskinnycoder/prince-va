import { type SchemaPluginOptions } from "sanity";
import album from "./schemaTypes/album";
import info, { quickLink } from "./schemaTypes/singletons/info";
import { singletonTypes } from "./utils/singleton";

export const schema: SchemaPluginOptions = {
	types: [quickLink, info, album],

	templates: (templates) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
