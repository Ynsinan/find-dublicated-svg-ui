import React from "react";
import { UploadAreaProps } from "../../Types/type";
import { UploadedImagesAreaContainer, ImagesWrapper, HeaderTitle } from "./style";

const UpladedImagesArea = ({ duplicates }: UploadAreaProps) => {
	return (
		<UploadedImagesAreaContainer>
			<HeaderTitle>Duplicate Images</HeaderTitle>
			<ImagesWrapper>
				{duplicates.map((duplicate, index) => (
					<div key={index} style={{ marginBottom: "20px", display: "flex" }}>
						<div>
							<h3 style={{ marginRight: "20px" }}> {duplicate.fileName}</h3>
							<img
								src={duplicate.source}
								alt={duplicate.fileName}
								style={{ width: "100px", height: "100px", marginRight: "20px" }}
							/>
						</div>
						<div>
							<h3>{duplicate.fileName2}</h3>
							<img
								src={duplicate.source2}
								alt={duplicate.fileName2}
								style={{ width: "100px", height: "100px" }}
							/>
						</div>
					</div>
				))}
			</ImagesWrapper>
		</UploadedImagesAreaContainer>
	);
};

export default UpladedImagesArea;
