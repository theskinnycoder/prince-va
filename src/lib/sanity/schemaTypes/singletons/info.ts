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
	],
});
