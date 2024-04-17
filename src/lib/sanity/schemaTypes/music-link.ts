import { defineField, defineType } from "sanity";

export default defineType({
	name: "musicLink",
	title: "Music Link",
	type: "document",
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "string",
		}),
		defineField({
			name: "href",
			title: "URL",
			type: "string",
		}),
	],
	preview: {
		select: {
			title: "label",
		},
	},
});
