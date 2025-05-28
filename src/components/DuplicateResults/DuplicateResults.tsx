import React from "react";
import { Card } from "../ui";
import { DuplicateImage } from "../../Types/type";
import {
	ResultsContainer,
	ResultsHeader,
	ResultsTitle,
	DuplicateGrid,
	DuplicatePair,
	ImageContainer,
	ImageWrapper,
	DuplicateImage as StyledImage,
	ImageInfo,
	ImageName,
	ComparisonIcon,
} from "./DuplicateResults.styles";

interface DuplicateResultsProps {
	duplicates: DuplicateImage[];
}

export const DuplicateResults: React.FC<DuplicateResultsProps> = ({ duplicates }) => {
	return (
		<Card variant="elevated" padding="lg">
			<ResultsContainer>
				<ResultsHeader>
					<ResultsTitle>
						🔍 Found {duplicates.length} Duplicate Pair{duplicates.length !== 1 ? "s" : ""}
					</ResultsTitle>
				</ResultsHeader>

				<DuplicateGrid>
					{duplicates.map((duplicate, index) => (
						<DuplicatePair key={index}>
							<ImageContainer>
								<ImageWrapper>
									<StyledImage src={duplicate.source} alt={duplicate.fileName} />
									<ImageInfo>
										<ImageName>{duplicate.fileName}</ImageName>
									</ImageInfo>
								</ImageWrapper>

								<ComparisonIcon>⚡</ComparisonIcon>

								<ImageWrapper>
									<StyledImage src={duplicate.source2} alt={duplicate.fileName2} />
									<ImageInfo>
										<ImageName>{duplicate.fileName2}</ImageName>
									</ImageInfo>
								</ImageWrapper>
							</ImageContainer>
						</DuplicatePair>
					))}
				</DuplicateGrid>
			</ResultsContainer>
		</Card>
	);
};
