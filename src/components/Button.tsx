import type { ReactNode } from "react";

export type ButtonProps = {
	children?: ReactNode;
};

export function MyButton({ children, ...props }: ButtonProps) {
	return (
		<button type="button" className="border rounded-md px-4 cursor-pointer">
			{children}
		</button>
	);
}
