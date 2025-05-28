import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.gray[100]};
	border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
	margin-top: auto;
	padding: ${({ theme }) => theme.spacing[8]} 0;
`;

export const FooterContent = styled.div`
	text-align: center;
`;

export const FooterText = styled.p`
	font-size: ${({ theme }) => theme.typography.fontSize.sm};
	color: ${({ theme }) => theme.colors.gray[600]};
	margin: 0;
	line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;
