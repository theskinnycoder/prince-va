import { singletonTypes } from "@/lib/sanity/utils/singleton";
import { type SchemaPluginOptions } from "sanity";
import album from "./album";
import info, { quickLink } from "./singletons/info";

export const schema: SchemaPluginOptions = {
	types: [quickLink, info, album],

	templates: (templates) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
