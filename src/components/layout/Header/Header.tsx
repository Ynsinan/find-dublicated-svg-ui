import React from "react";
import { Container } from "../Container/Container";
import { StyledHeader, HeaderContent, HeaderTitle, HeaderSubtitle } from "./Header.styles";

export const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Container>
				<HeaderContent>
					<HeaderTitle>SVG Duplicate Finder</HeaderTitle>
					<HeaderSubtitle>Easily find and manage duplicate SVG files in your uploads</HeaderSubtitle>
				</HeaderContent>
			</Container>
		</StyledHeader>
	);
};
