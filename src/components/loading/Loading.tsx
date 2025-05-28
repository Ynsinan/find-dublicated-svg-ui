import React from "react";
import { LoadingOverlay, LoadingContent, LoadingSpinner, LoadingText } from "./Loading.styles";

interface LoadingProps {
	message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = "Processing files..." }) => {
	return (
		<LoadingOverlay>
			<LoadingContent>
				<LoadingSpinner />
				<LoadingText>{message}</LoadingText>
			</LoadingContent>
		</LoadingOverlay>
	);
};
