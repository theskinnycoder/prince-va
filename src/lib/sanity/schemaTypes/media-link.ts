import { defineField, defineType } from "sanity";

export default defineType({
	name: "mediaLink",
	title: "Media Link",
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
