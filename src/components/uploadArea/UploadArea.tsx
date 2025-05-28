import React, { useState, useRef } from "react";
import { Button, Card } from "../ui";
import {
	UploadContainer,
	DropZone,
	DropZoneContent,
	DropZoneIcon,
	DropZoneText,
	DropZoneSubtext,
	HiddenInput,
	PreviewGrid,
	PreviewItem,
	PreviewImage,
	PreviewName,
	ButtonGroup,
	FileStats,
} from "./UploadArea.styles";

interface UploadAreaProps {
	files: FileList | null;
	onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onUpload: () => void;
	onClear: () => void;
	loading: boolean;
}

export const UploadArea: React.FC<UploadAreaProps> = ({ files, onFileChange, onUpload, onClear, loading }) => {
	const [isDragOver, setIsDragOver] = useState(false);
	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);

		const droppedFiles = e.dataTransfer.files;
		if (droppedFiles.length > 0) {
			handleFileSelection(droppedFiles);
		}
	};

	const handleFileSelection = (selectedFiles: FileList) => {
		// Clear previous previews
		setPreviewImages([]);

		// Create file change event for parent component
		const event = {
			target: { files: selectedFiles },
		} as React.ChangeEvent<HTMLInputElement>;

		onFileChange(event);

		// Generate previews
		Array.from(selectedFiles).forEach((file) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onloadend = function (e) {
				setPreviewImages((prevImages) => [...prevImages, e.target?.result as string]);
			};
		});
	};

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			handleFileSelection(e.target.files);
		}
	};

	const handleDropZoneClick = () => {
		fileInputRef.current?.click();
	};

	const handleClear = () => {
		setPreviewImages([]);
		onClear();
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const fileCount = files ? files.length : 0;

	return (
		<Card variant="elevated" padding="lg">
			<UploadContainer>
				<DropZone
					isDragOver={isDragOver}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					onClick={handleDropZoneClick}
				>
					<DropZoneContent>
						<DropZoneIcon>📁</DropZoneIcon>
						<DropZoneText>{isDragOver ? "Drop files here" : "Drag & drop SVG files here"}</DropZoneText>
						<DropZoneSubtext>or click to select files</DropZoneSubtext>
					</DropZoneContent>

					<HiddenInput ref={fileInputRef} type="file" multiple accept=".svg" onChange={handleFileInputChange} />
				</DropZone>

				{fileCount > 0 && (
					<FileStats>
						📊 {fileCount} file{fileCount !== 1 ? "s" : ""} selected
					</FileStats>
				)}

				{previewImages.length > 0 && (
					<PreviewGrid>
						{previewImages.map((image, index) => (
							<PreviewItem key={index}>
								<PreviewImage src={image} alt={`Preview ${index + 1}`} />
								<PreviewName>{files?.[index]?.name || `File ${index + 1}`}</PreviewName>
							</PreviewItem>
						))}
					</PreviewGrid>
				)}

				{fileCount > 0 && (
					<ButtonGroup>
						<Button onClick={onUpload} disabled={loading} isLoading={loading} size="lg">
							{loading ? "Processing..." : "Find Duplicates"}
						</Button>

						<Button onClick={handleClear} variant="outline" size="lg" disabled={loading}>
							Clear Files
						</Button>
					</ButtonGroup>
				)}
			</UploadContainer>
		</Card>
	);
};
