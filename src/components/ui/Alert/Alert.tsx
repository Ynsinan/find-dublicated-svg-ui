import React from "react";
import { StyledAlert, AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertProps } from "./Alert.styles";

interface Props extends AlertProps {
	title?: string;
	children: React.ReactNode;
	icon?: React.ReactNode;
	variant?: "success" | "error" | "warning" | "info";
	className?: string;
}

const defaultIcons = {
	success: "✅",
	error: "❌",
	warning: "⚠️",
	info: "ℹ️",
};

export const Alert: React.FC<Props> = ({ title, children, icon, variant = "info", className, ...props }) => {
	const displayIcon = icon || defaultIcons[variant];

	return (
		<StyledAlert variant={variant} className={className} {...props}>
			{displayIcon && <AlertIcon>{displayIcon}</AlertIcon>}

			<AlertContent>
				{title && <AlertTitle>{title}</AlertTitle>}

				<AlertDescription>{children}</AlertDescription>
			</AlertContent>
		</StyledAlert>
	);
};
