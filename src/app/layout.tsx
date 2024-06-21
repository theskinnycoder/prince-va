import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { News_Cycle } from "next/font/google";
import { type PropsWithChildren } from "react";
import "./globals.css";

const font = News_Cycle({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Prince VA",
	description: "Official site of Prince VA: Recording Artist & Producer",
};

export const viewport: Viewport = {
	themeColor: "black",
	initialScale: 1,
	userScalable: false,
};

interface RootLayoutProps extends PropsWithChildren<{}> {}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={cn(
					font.className,
					"h-[100dvh] overflow-hidden bg-black uppercase text-white antialiased",
				)}
			>
				{children}
			</body>
		</html>
	);
}
