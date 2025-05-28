import styled from "styled-components";

export const StyledHeader = styled.header`
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.primary[600]} 0%,
		${({ theme }) => theme.colors.primary[800]} 100%
	);
	color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacing[12]} 0;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
			repeat;
		opacity: 0.1;
	}
`;

export const HeaderContent = styled.div`
	text-align: center;
	position: relative;
	z-index: 1;
`;

export const HeaderTitle = styled.h1`
	font-size: ${({ theme }) => theme.typography.fontSize["4xl"]};
	font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
	line-height: ${({ theme }) => theme.typography.lineHeight.tight};
	margin-bottom: ${({ theme }) => theme.spacing[4]};
	background: linear-gradient(
		135deg,
		${({ theme }) => theme.colors.white} 0%,
		${({ theme }) => theme.colors.gray[200]} 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
	}
`;

export const HeaderSubtitle = styled.p`
	font-size: ${({ theme }) => theme.typography.fontSize.lg};
	font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
	line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
	opacity: 0.9;
	max-width: 600px;
	margin: 0 auto;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: ${({ theme }) => theme.typography.fontSize.base};
	}
`;
