import React from "react";
import { ButtonProps, StyledButton } from "./Button.styles";

interface Props extends ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	className?: string;
	variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
	isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
	children,
	onClick,
	disabled = false,
	type = "button",
	variant = "primary",
	size = "md",
	fullWidth = false,
	isLoading = false,
	className,
	...props
}) => {
	return (
		<StyledButton
			onClick={onClick}
			disabled={disabled || isLoading}
			type={type}
			variant={variant}
			size={size}
			fullWidth={fullWidth}
			isLoading={isLoading}
			className={className}
			{...props}
		>
			{isLoading ? <span>Loading...</span> : children}
		</StyledButton>
	);
};
