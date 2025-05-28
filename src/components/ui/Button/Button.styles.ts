import styled, { css } from "styled-components";

export interface ButtonProps {
	variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
	isLoading?: boolean;
}

const getVariantStyles = (variant: ButtonProps["variant"]) => {
	switch (variant) {
		case "secondary":
			return css`
				background-color: ${({ theme }) => theme.colors.gray[100]};
				color: ${({ theme }) => theme.colors.gray[700]};
				border: 1px solid ${({ theme }) => theme.colors.gray[300]};

				&:hover:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.gray[200]};
					border-color: ${({ theme }) => theme.colors.gray[400]};
				}

				&:active:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.gray[300]};
				}
			`;

		case "outline":
			return css`
				background-color: transparent;
				color: ${({ theme }) => theme.colors.primary[600]};
				border: 1px solid ${({ theme }) => theme.colors.primary[300]};

				&:hover:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.primary[50]};
					border-color: ${({ theme }) => theme.colors.primary[400]};
				}

				&:active:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.primary[100]};
				}
			`;

		case "ghost":
			return css`
				background-color: transparent;
				color: ${({ theme }) => theme.colors.gray[600]};
				border: 1px solid transparent;

				&:hover:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.gray[100]};
					color: ${({ theme }) => theme.colors.gray[700]};
				}

				&:active:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.gray[200]};
				}
			`;

		case "danger":
			return css`
				background-color: ${({ theme }) => theme.colors.error[500]};
				color: ${({ theme }) => theme.colors.white};
				border: 1px solid ${({ theme }) => theme.colors.error[500]};

				&:hover:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.error[600]};
					border-color: ${({ theme }) => theme.colors.error[600]};
				}

				&:active:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.error[700]};
				}
			`;

		default: // primary
			return css`
				background-color: ${({ theme }) => theme.colors.primary[500]};
				color: ${({ theme }) => theme.colors.white};
				border: 1px solid ${({ theme }) => theme.colors.primary[500]};

				&:hover:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.primary[600]};
					border-color: ${({ theme }) => theme.colors.primary[600]};
				}

				&:active:not(:disabled) {
					background-color: ${({ theme }) => theme.colors.primary[700]};
				}
			`;
	}
};

const getSizeStyles = (size: ButtonProps["size"]) => {
	switch (size) {
		case "sm":
			return css`
				padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
				font-size: ${({ theme }) => theme.typography.fontSize.sm};
				font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
				min-height: 2rem;
			`;

		case "lg":
			return css`
				padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
				font-size: ${({ theme }) => theme.typography.fontSize.lg};
				font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
				min-height: 3rem;
			`;

		default: // md
			return css`
				padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
				font-size: ${({ theme }) => theme.typography.fontSize.base};
				font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
				min-height: 2.5rem;
			`;
	}
};

export const StyledButton = styled.button<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing[2]};
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
	line-height: ${({ theme }) => theme.typography.lineHeight.tight};
	text-align: center;
	text-decoration: none;
	transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};
	white-space: nowrap;
	user-select: none;
	position: relative;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.shadows.sm};

	${({ variant }) => getVariantStyles(variant)}
	${({ size }) => getSizeStyles(size)}
  
  ${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
  
  ${({ isLoading }) =>
		isLoading &&
		css`
			cursor: wait;
			opacity: 0.8;
		`}
  
  &:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;

		&:hover {
			transform: none;
		}
	}

	&:not(:disabled):hover {
		transform: translateY(-1px);
		box-shadow: ${({ theme }) => theme.shadows.md};
	}

	&:not(:disabled):active {
		transform: translateY(0);
		box-shadow: ${({ theme }) => theme.shadows.sm};
	}
`;
