import { defineField, defineType } from "sanity";

export default defineType({
	name: "album",
	title: "Album",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "string",
		}),
		defineField({
			name: "url",
			title: "Link URL",
			type: "string",
		}),
		defineField({
			name: "coverArt",
			title: "Cover Art",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		}),
		defineField({
			title: "Background Video",
			name: "backgroundVideo",
			type: "file",
		}),
		defineField({
			name: "releaseDate",
			title: "Release Date",
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
			title: "title",
			media: "coverArt",
		},
	},
});
