import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { document } from "./sanity/document";
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

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
	title: "Prince Va",
	name: "prince-va",
});
