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

// API Response Types
export interface PerformanceData {
	totalFiles: number;
	maxFilesAllowed: number;
	timeoutSeconds: number;
}

export interface SuccessResponse {
	isSuccess: true;
	message: string;
	data: DuplicateImage[];
	totalDuplicates: number;
	returnedCount: number;
	performance: PerformanceData;
}

export interface ErrorResponse {
	isSuccess: false;
	error: string;
}

export type ApiResponse = SuccessResponse | ErrorResponse;
