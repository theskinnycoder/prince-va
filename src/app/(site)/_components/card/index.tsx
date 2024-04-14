import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

interface CardProps {
	href: string;
	alt: string;
	src: string;
	buttonText: string;
	className?: string;
}

const Card = (props: CardProps) => {
	const { href, src, alt, buttonText, className, ...rest } = props;

	return (
		<div
			className={cn(
				className,
				"relative mx-auto h-[41vh] sm:h-[50vh]",
				"rounded-md",
				"flex items-center justify-center",
				"cursor-pointer",
			)}
			style={{
				aspectRatio: 0.8234323432343235,
			}}
			{...rest}
		>
			<Image
				src={src}
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
				href={href}
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
