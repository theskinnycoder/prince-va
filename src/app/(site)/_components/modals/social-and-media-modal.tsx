"use client";

import type { LinkType } from "@/lib/types";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Button } from "../button";

interface SocialAndMediaModalProps {
	mediaLinks: Array<LinkType>;
	socialLinks: Array<
		LinkType & {
			icon: JSX.Element;
		}
	>;
}

export default function SocialAndMediaModal({
	mediaLinks,
	socialLinks,
}: SocialAndMediaModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button className="fixed bottom-7 right-4 z-50 px-3.5 xl:bottom-12 xl:right-12 xl:scale-125">
					MEDIA
				</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay
					className={cn(
						"fixed inset-0 z-50 bg-black/85 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
					)}
				/>
				<Dialog.Content
					className={cn(
						"fixed left-[50%] top-[50%] z-50 size-full translate-x-[-50%] translate-y-[-50%] bg-transparent px-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
					)}
				>
					{/* Social Links List */}
					<ul className="absolute inset-x-0 top-12 flex items-center justify-center space-x-5 px-4 xl:space-x-10">
						{socialLinks.map((link) => (
							<li key={link.label}>
								<Link
									className="text-white"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<button
										className={cn(
											"aspect-square min-h-11 shrink-0 cursor-pointer select-none rounded-md p-2",
											"transition-colors duration-300",
											"bg-transparent hover:bg-[#d9d9d9]/10",
										)}
									>
										{link.icon}
									</button>
								</Link>
							</li>
						))}
					</ul>

					{/* Media Links List */}
					<ul className="flex h-full flex-1 flex-col items-center justify-center space-y-6 xl:space-y-8">
						{mediaLinks.map((link) => (
							<li key={link.label}>
								<Link
									className="text-white"
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="min-w-32 px-3.5 xl:scale-125">
										{link.label}
									</Button>
								</Link>
							</li>
						))}
					</ul>

					{/* Close Button */}
					<Dialog.Close
						className="fixed bottom-12 left-1/2 -translate-x-1/2 transform px-3.5 text-white xl:scale-125"
						asChild
					>
						<Button>CLOSE</Button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
