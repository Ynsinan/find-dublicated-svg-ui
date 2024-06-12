import React, { useState } from "react";
import { UploadArePageProps } from "../../Types/type";
import {
	UploadAreaContainer,
	ImagePreview,
	UploadedImagesWrapper,
	StyledUploadButton,
	StyledUploadInput,
	StyledUploadLabel,
} from "./style";

const UploadArea = ({ handleUpload, loading, setFiles, setDuplicates }: UploadArePageProps) => {
	const [previewImages, setPreviewImages] = useState<string[]>([]);

		const handleClear = () => {
		setFiles(null); // Dosyaları temizle
		setPreviewImages([]); // Önizlemeleri temizle
		setDuplicates([]); // Yinelemeleri temizle
		const fileInput = document.getElementById("fileUpload") as HTMLInputElement;
		if (fileInput) {
			fileInput.value = ""; // Dosya seçici'nin değerini sıfırla
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPreviewImages([]); // Önizlemeleri temizle
		setFiles(null); // Dosyaları temizle
		setDuplicates([]); // Yinelemeleri temizle
		
		setFiles(event.target.files);
		if (event.target.files) {
			Array.from(event.target.files).forEach((file) => {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);
				fileReader.onloadend = function (e) {
					setPreviewImages((prevImages) => [...prevImages, e.target?.result as string]);
				};
			});
		}
	};


	return (
		<UploadAreaContainer>
			<StyledUploadInput id="fileUpload" multiple accept=".svg" onChange={handleFileChange} />
			<StyledUploadLabel htmlFor="fileUpload">Select Files</StyledUploadLabel>
			<UploadedImagesWrapper>
				{previewImages.map((image, index) => (
					<ImagePreview key={index} src={image} alt={`preview ${index}`} />
				))}
			</UploadedImagesWrapper>
			{previewImages.length > 0 && (
				<>
					<StyledUploadButton onClick={handleUpload} disabled={loading}>
						{loading ? "Uploading..." : "Upload"}
					</StyledUploadButton>
					<StyledUploadButton onClick={handleClear}>Clear</StyledUploadButton>
				</>
			)}
		</UploadAreaContainer>
	);
};

export default UploadArea;
