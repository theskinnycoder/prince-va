import { urlForImage } from "@/lib/sanity/utils/image";
import type { CustomImage } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

interface CardProps {
	href: string;
	alt: string;
	image: CustomImage;
	buttonText: string;
	className?: string;
}

const Card = (props: CardProps) => {
	const { href, image, alt, buttonText, className, ...rest } = props;

	return (
		<div
			className={cn(
				className,
				"relative mx-auto w-[58dvw] sm:h-[50dvh] sm:w-auto",
				"rounded-md",
				"flex items-center justify-center",
				"cursor-pointer",
				"z-50 my-16 shadow-2xl shadow-black/90",
				"aspect-square",
			)}
			{...rest}
		>
			<Image
				src={urlForImage(image)}
				alt={alt}
				className="size-full rounded-[5px] object-cover text-transparent opacity-100 transition-all duration-300 ease-in-out hover:brightness-50 hover:filter"
				width={2000}
				height={2428}
				decoding="async"
				fetchPriority="high"
				priority
				loading="eager"
			/>
			<Link
				href={href ?? "/"}
				target="_blank"
				rel="noopener noreferrer"
				className="absolute inset-0 z-[1] flex items-center justify-center rounded-[5px] duration-200 hover:opacity-100 sm:flex sm:bg-black sm:bg-opacity-50 sm:opacity-0"
			>
				<div className="hidden sm:flex">
					<Button>{buttonText}</Button>
				</div>
			</Link>
		</div>
	);
};

export { Card };
