import styled, { keyframes, css } from "styled-components";

interface LinksContainerProps {
	isExpandedContainer: boolean;
}

const slideIn = keyframes`
	from {
		transform: translateY(-50%) translateX(100%);
		opacity: 0;
	}
	to {
		transform: translateY(-50%) translateX(0);
		opacity: 1;
	}
`;

const slideOut = keyframes`
	from {
		transform: translateY(-50%) translateX(0);
		opacity: 1;
	}
	to {
		transform: translateY(-50%) translateX(100%);
		opacity: 0;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: translateY(-50%) translateX(0);
	}
	to {
		opacity: 0;
		transform: translateY(-50%) translateX(100%);
	}
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(-50%) translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateY(-50%) translateX(0);
	}
`;

export const LinksContainer = styled.div<LinksContainerProps>`
	position: fixed;
	align-items: center;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	background-color: #f8f9fa;
	padding: 20px;
	border-radius: 10px 0 0 10px;
	gap: 10px;
	animation: ${(props) =>
		props.isExpandedContainer
			? css`
					${slideIn} 0.3s forwards
				`
			: css`
					${slideOut} 0.3s forwards
				`};
	animation-fill-mode: forwards;
`;

export const SocialMediaLink = styled.a`
	display: block;
	margin-bottom: 10px;
	color: #333;
	text-decoration: none;
	font-size: 18px;
	transition: color 0.3s ease;

	&:hover {
		color: #706fd3;
	}
`;

export const Button = styled.button<LinksContainerProps>`
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	background-color: #fff;
	border: none;
	padding: 10px 10px;
	border-radius: 10px 0 0 10px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	z-index: 99999;
	animation: ${(props) =>
		props.isExpandedContainer
			? css`
					${fadeOut} 0.3s forwards
				`
			: css`
					${fadeIn} 0.3s forwards
				`};
	animation-fill-mode: forwards;

	&:hover {
		background-color: #706fd3; // hover durumunda renk değişikliği
	}
`;
