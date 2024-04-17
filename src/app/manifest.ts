import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Prince VA",
		short_name: "Prince VA",
		description: "Official site of Prince VA: Recording Artist & Producer",
		start_url: "/",
		display: "standalone",
		background_color: "#000",
		theme_color: "#000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
