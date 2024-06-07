import React from "react";
import { UploadAreaProps } from "../../Types/type";
import { UploadedImagesAreaContainer, ImagesWrapper, HeaderTitle, DublicateImageWrapper, ImageWrapper, FileName } from "./style";

const UpladedImagesArea = ({ duplicates }: UploadAreaProps) => {
	return (
		<UploadedImagesAreaContainer>
			<HeaderTitle>Duplicate Images</HeaderTitle>
			<ImagesWrapper>
				{duplicates.map((duplicate, index) => (
					<DublicateImageWrapper key={index} style={{ marginBottom: "20px", display: "flex" }}>
						<ImageWrapper>
							<img
								src={duplicate.source}
								alt={duplicate.fileName}
								style={{ width: "100px", height: "100px", marginRight: "20px" }}
							/>
							<FileName style={{ marginRight: "20px" }}> {duplicate.fileName}</FileName>
						</ImageWrapper>
						<ImageWrapper>
							<img
								src={duplicate.source2}
								alt={duplicate.fileName2}
								style={{ width: "100px", height: "100px" }}
							/>
							<FileName>{duplicate.fileName2}</FileName>
						</ImageWrapper>
					</DublicateImageWrapper>
				))}
			</ImagesWrapper>
		</UploadedImagesAreaContainer>
	);
};

export default UpladedImagesArea;
