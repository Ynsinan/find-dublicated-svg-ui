import styled, { css } from "styled-components";

export interface CardProps {
	variant?: "default" | "elevated" | "outlined";
	padding?: "none" | "sm" | "md" | "lg";
}

const getVariantStyles = (variant: CardProps["variant"]) => {
	switch (variant) {
		case "elevated":
			return css`
				box-shadow: ${({ theme }) => theme.shadows.lg};
				border: 1px solid ${({ theme }) => theme.colors.gray[200]};
			`;

		case "outlined":
			return css`
				box-shadow: none;
				border: 1px solid ${({ theme }) => theme.colors.gray[300]};
			`;

		default: // default
			return css`
				box-shadow: ${({ theme }) => theme.shadows.md};
				border: 1px solid ${({ theme }) => theme.colors.gray[200]};
			`;
	}
};

const getPaddingStyles = (padding: CardProps["padding"]) => {
	switch (padding) {
		case "none":
			return css`
				padding: 0;
			`;

		case "sm":
			return css`
				padding: ${({ theme }) => theme.spacing[4]};
			`;

		case "lg":
			return css`
				padding: ${({ theme }) => theme.spacing[8]};
			`;

		default: // md
			return css`
				padding: ${({ theme }) => theme.spacing[6]};
			`;
	}
};

export const StyledCard = styled.div<CardProps>`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius.xl};
	transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};

	${({ variant }) => getVariantStyles(variant)}
	${({ padding }) => getPaddingStyles(padding)}
`;
