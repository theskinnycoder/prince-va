import { document } from "@/lib/sanity/document";
import { schema } from "@/lib/sanity/schema";
import { dataset, projectId } from "@/lib/sanity/utils/env";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
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
			structure: (S, context) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Project Info")
							.id("info")
							.child(S.document().schemaType("info").documentId("info")),

						S.divider(),

						orderableDocumentListDeskItem({
							type: "album",
							title: "Albums",
							S,
							context,
						}),

						orderableDocumentListDeskItem({
							type: "musicLink",
							title: "Music Links",
							S,
							context,
						}),

						orderableDocumentListDeskItem({
							type: "socialLink",
							title: "Social Links",
							S,
							context,
						}),

						orderableDocumentListDeskItem({
							type: "mediaLink",
							title: "Media Links",
							S,
							context,
						}),
					]),
		}),
	],
	title: "Prince VA",
	name: "prince-va",
});
