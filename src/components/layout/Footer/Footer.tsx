import React from "react";
import { Container } from "../Container/Container";
import { StyledFooter, FooterContent, FooterText } from "./Footer.styles";

export const Footer: React.FC = () => {
	return (
		<StyledFooter>
			<Container>
				<FooterContent>
					<FooterText>© 2024 SVG Duplicate Finder. Built with ❤️ using React & TypeScript.</FooterText>
				</FooterContent>
			</Container>
		</StyledFooter>
	);
};
