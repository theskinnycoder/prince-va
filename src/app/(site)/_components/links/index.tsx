import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import OverlayModal from "./overlay-modal";

const musicLinks = [
	{
		label: "Spotify",
		href: "https://open.spotify.com/artist/1rk4YjyZG8gVvaYRlfEFLA",
	},
	{
		label: "Apple Music",
		href: "https://itunes.apple.com/ca/artist/prince-va/1370237927",
	},
	{
		label: "Anghami",
		href: "https://play.anghami.com/artist/4028679",
	},
	{
		label: "Deezer",
		href: "https://www.deezer.com/en/artist/14524239",
	},
	{
		label: "TIDAL",
		href: "https://tidal.com/browse/artist/10347858",
	},
];

const mediaLinks = [
	{
		label: "Dropkick Article",
		href: "https://en-ae.dropkicks.com/blog/facesofdropkick_princeva.html",
	},
	{
		label: "Dubai Eye 103.8 Radio Interview",
		href: "https://www.facebook.com/watch/?v=385927419623676",
	},
	{
		label: "Dubai One DXB Today TV Performance",
		href: "https://www.youtube.com/watch?v=wcvuJLzZTfw&ab_channel=DUBAI%E2%80%99one",
	},
];

const socialsLinks = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/prince_v.a/",
	},
	{
		label: "TikTok",
		href: "https://www.tiktok.com/@theprinceva",
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/officialprince.va/",
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/channel/UCxRLxYUtjnABS48Zf49GBKA",
	},
];

export default function Header() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			{/* Logo Link */}
			<Link
				href="/"
				className="fixed left-12 top-4 z-50"
			>
				<Image
					src="/logo.png"
					alt="Logo"
					width={2000}
					height={2000}
					className="max-w-24"
				/>
			</Link>

			{/* Music Button */}
			<OverlayModal links={musicLinks}>
				<Button className="fixed right-12 top-8 z-50 scale-125 px-3.5">
					MUSIC
				</Button>
			</OverlayModal>

			{/* Media Button */}
			<OverlayModal links={mediaLinks}>
				<Button className="fixed bottom-12 right-12 z-50 scale-125 px-3.5">
					MEDIA
				</Button>
			</OverlayModal>

			{/* Socials Button */}
			<OverlayModal links={socialsLinks}>
				<Button className="fixed bottom-12 left-12 z-50 scale-125 px-3.5">
					SOCIALS
				</Button>
			</OverlayModal>
		</div>
	);
}