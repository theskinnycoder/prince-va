import { type DocumentPluginOptions } from "sanity";
import { singletonActions, singletonTypes } from "./utils/singleton";

export const document: DocumentPluginOptions = {
	actions: (input, context) =>
		singletonTypes.has(context.schemaType)
			? input.filter(({ action }) => action && singletonActions.has(action))
			: input,
};
