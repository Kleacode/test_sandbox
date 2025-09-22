import type { ReactNode } from "react";

export type ButtonProps = {
	children?: ReactNode;
	onClick?: () => void;
};

export function MyButton({ children, onClick, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className="border rounded-md px-4 cursor-pointer hover:bg-gray-100"
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}
