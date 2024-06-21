import { ICONS } from "@/icons";
import { sanityService } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import SocialAndMediaModal from "../modals/social-and-media-modal";
import OverlayModal from "./overlay-modal";

export default async function Header() {
	const promises = [
		sanityService.getMediaLinks(),
		sanityService.getMusicLinks(),
		sanityService.getSocialLinks(),
		sanityService.getServiceLinks(),
	];

	const [mediaLinks, musicLinks, socialsLinks, servicesLinks] =
		await Promise.all(promises);

	const socialLinksWithIcons = socialsLinks.map((link) => {
		switch (link.label.toLowerCase()) {
			case "facebook":
				return {
					...link,
					icon: ICONS.facebook,
				};
			case "instagram":
				return {
					...link,
					icon: ICONS.instagram,
				};
			case "tiktok":
				return {
					...link,
					icon: ICONS.tiktok,
				};
			case "youtube":
				return {
					...link,
					icon: ICONS.youtube,
				};
			default:
				return { ...link, icon: <></> };
		}
	});

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
			<SocialAndMediaModal
				mediaLinks={mediaLinks}
				socialLinks={socialLinksWithIcons}
			/>

			{/* Socials Button */}
			<OverlayModal links={servicesLinks}>
				<Button className="fixed bottom-7 left-4 z-50 px-3.5 xl:bottom-12 xl:left-12 xl:scale-125">
					SERVICES
				</Button>
			</OverlayModal>
		</div>
	);
}
