import { document } from "@/lib/sanity/document";
import { schema } from "@/lib/sanity/schema";
import { dataset, projectId } from "@/lib/sanity/utils/env";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
	basePath: "/admin",
	projectId,
	dataset,
	schema,
	document,
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Project Info")
							.id("info")
							.child(S.document().schemaType("info").documentId("info")),

						S.divider(),

						S.documentTypeListItem("album").title("Albums"),
					]),
		}),
	],
	title: "Prince VA",
	name: "prince-va",
});
