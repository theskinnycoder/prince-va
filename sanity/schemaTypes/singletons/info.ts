import { defineField, defineType } from "sanity";

export default defineType({
	name: "info",
	title: "Info",
	type: "document",
	fields: [
		defineField({
			name: "founder",
			title: "Founder",
			type: "string",
		}),
		defineField({
			name: "companyName",
			title: "Company Name",
			type: "string",
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "primaryEmail",
			title: "Primary Email",
			type: "string",
		}),
		defineField({
			name: "quickLinks",
			title: "Quick Links",
			type: "array",
			of: [{ type: "reference", to: { type: "quickLink" } }],
		}),
	],
});

export const quickLink = defineField({
	name: "quickLink",
	title: "Quick Link",
	type: "document",
	fields: [
		defineField({
			name: "label",
			title: "Label",
			type: "string",
		}),
		defineField({
			name: "url",
			title: "URL",
			type: "url",
		}),
	],
});
