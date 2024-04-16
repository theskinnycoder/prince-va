import { sanityService } from "@/services";
import BgVideo from "./_sections/bg-video";
import MainCarousel from "./_sections/main-carousel";
import SlideFooter from "./_sections/slide-footer";
import SlideHeader from "./_sections/slide-header";

export default async function Home() {
	const data = await sanityService.getAlbums();

	return (
		<main className="relative flex h-screen flex-col items-center justify-center">
			<BgVideo data={data} />

			<SlideHeader data={data} />

			<MainCarousel data={data} />

			<SlideFooter data={data} />
		</main>
	);
}
