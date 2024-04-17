import { sanityService } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import OverlayModal from "./overlay-modal";

export default async function Header() {
	const promises = [
		sanityService.getMediaLinks(),
		sanityService.getMusicLinks(),
		sanityService.getSocialLinks(),
	];

	const [mediaLinks, musicLinks, socialsLinks] = await Promise.all(promises);

	return (
		<div className="absolute inset-0 flex items-center justify-center">
			{/* Logo Link */}
			<Link
				href="/"
				className="fixed left-4 top-4 z-50 xl:left-12"
			>
				<Image
					src="/logo.png"
					alt="Logo"
					width={2000}
					height={2000}
					className="max-w-14 xl:max-w-24"
				/>
			</Link>

			{/* Music Button */}
			<OverlayModal links={musicLinks}>
				<Button className="fixed right-4 top-4 z-50 px-3.5 xl:right-12 xl:top-8 xl:scale-125">
					MUSIC
				</Button>
			</OverlayModal>

			{/* Media Button */}
			<OverlayModal links={mediaLinks}>
				<Button className="fixed bottom-7 right-4 z-50 px-3.5 xl:bottom-12 xl:right-12 xl:scale-125">
					MEDIA
				</Button>
			</OverlayModal>

			{/* Socials Button */}
			<OverlayModal links={socialsLinks}>
				<Button className="fixed bottom-7 left-4 z-50 px-3.5 xl:bottom-12 xl:left-12 xl:scale-125">
					SOCIALS
				</Button>
			</OverlayModal>
		</div>
	);
}
