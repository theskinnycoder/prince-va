import { assertValue } from "@/lib/utils";

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-14";

export const dataset = assertValue(
	process.env.NEXT_PUBLIC_SANITY_DATASET,
	"Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	"Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);
