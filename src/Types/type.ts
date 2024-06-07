export type UploadArePageProps = {
	handleUpload: () => void;
	loading: boolean;
	handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	setFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
	setDuplicates: React.Dispatch<React.SetStateAction<DuplicateImage[]>>;
};

export interface DuplicateImage {
	fileName: string;
	source: string;
	fileName2: string;
	source2: string;
}

export type UploadAreaProps = {
	duplicates: DuplicateImage[];
};
