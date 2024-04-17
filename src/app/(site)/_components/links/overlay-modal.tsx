"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { Button } from "../button";

interface OverlayModalProps extends PropsWithChildren<{}> {
	links: Array<{
		href: string;
		label: string;
	}>;
}

export default function OverlayModal({ children, links }: OverlayModalProps) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay
					className={cn(
						"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/85",
					)}
				/>
				<Dialog.Content
					className={cn(
						"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 size-full translate-x-[-50%] translate-y-[-50%] bg-transparent px-6 duration-200",
					)}
				>
					{/* Links List */}
					<ul className="flex h-full flex-1 flex-col items-center justify-center space-y-6 xl:space-y-8">
						{links.map((link) => (
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
