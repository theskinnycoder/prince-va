import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, className, ...rest } = props;

	return (
		<button
			ref={ref}
			{...rest}
			className={cn(
				"cursor-pointer select-none",
				"rounded-[30px] backdrop:blur-[2px]",
				"inline-flex items-center justify-center",
				"h-[30px] px-[9px] py-0",
				"text-sm font-medium leading-none tracking-[1.1px]",
				"transition-colors duration-300",
				"bg-transparent hover:bg-[#d9d9d9]/10",
				"text-center uppercase",
				"border border-[#ffffff]/30",
				className,
			)}
		>
			{children}
		</button>
	);
});

Button.displayName = "Button";

export { Button };
