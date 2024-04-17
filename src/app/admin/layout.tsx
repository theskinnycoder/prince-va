import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Admin Panel",
	description: "Admin Panel of the Prince VA site",
};

interface AdminPanelLayoutProps extends PropsWithChildren<{}> {}

export default function AdminPanelLayout({ children }: AdminPanelLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
