import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function numberWithinRange(
	number: number,
	min: number,
	max: number,
): number {
	return Math.min(Math.max(number, min), max);
}
