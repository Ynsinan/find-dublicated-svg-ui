import React from "react";
import { StyledContainer, ContainerProps } from "./Container.styles";

interface Props extends ContainerProps {
	children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children, ...props }) => {
	return <StyledContainer {...props}>{children}</StyledContainer>;
};
