import { defineField, defineType } from "sanity";

export default defineType({
	name: "serviceLink",
	title: "Service Link",
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
		defineField({
			title: "Order",
			name: "orderRank",
			type: "string",
		}),
	],
	preview: {
		select: {
			title: "label",
		},
	},
});
