import type { ReactNode } from "react";

export type ButtonProps = {
	children?: ReactNode;
	onClick?: () => void;
};

export function MyButton({ children, onClick, ...props }: ButtonProps) {
	return (
		<button
			type="button"
			className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}
