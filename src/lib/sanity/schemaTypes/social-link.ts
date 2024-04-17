import { defineField, defineType } from "sanity";

export default defineType({
	name: "socialLink",
	title: "Social Link",
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
