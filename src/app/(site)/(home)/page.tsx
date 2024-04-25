import { cn } from "@/lib/utils";
import { sanityService } from "@/services";
import Header from "../_components/links";
import BgVideo from "./_sections/bg-video";
import MainCarousel from "./_sections/main-carousel";
import SlideFooter from "./_sections/slide-footer";
import SlideHeader from "./_sections/slide-header";

export const revalidate = 86400000; // 1 day
export const runtime = "edge";

export default async function Home() {
	const data = await sanityService.getAlbums();

	return (
		<main
			className={cn(
				"relative flex h-screen flex-col items-center justify-center",
			)}
		>
			<Header />

			<BgVideo data={data} />

			<SlideHeader data={data} />

			<MainCarousel data={data} />

			<SlideFooter data={data} />
		</main>
	);
}
