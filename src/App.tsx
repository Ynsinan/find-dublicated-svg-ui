import React, { useState } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Container } from "./components/layout/Container/Container";
import { Header } from "./components/layout/Header/Header";
import { UploadArea } from "./components/uploadArea/UploadArea";
import { DuplicateResults } from "./components/DuplicateResults/DuplicateResults";
import { Loading } from "./components/loading/Loading";
import { Footer } from "./components/layout/Footer/Footer";
import { Alert } from "./components/ui";
import SocialMediaButton from "./components/contact";
import { DuplicateImage, ApiResponse, SuccessResponse } from "./Types/type";
import { AppContainer, MainContent } from "./App.styles";

const App: React.FC = () => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [duplicates, setDuplicates] = useState<DuplicateImage[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [performanceData, setPerformanceData] = useState<{
		totalFiles: number;
		totalDuplicates: number;
		returnedCount: number;
	} | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFiles(event.target.files);
	};

	const handleUpload = async () => {
		if (!files) {
			setError("Please select files to upload.");
			return;
		}

		setLoading(true);
		setError(null);
		setSuccessMessage(null);
		setDuplicates([]);
		setPerformanceData(null);

		const formData = new FormData();
		for (let i = 0; i < files.length; i++) {
			formData.append("file", files[i]);
		}

		try {
			const response = await axios.post<ApiResponse>(
				"https://find-dublicated-svg-api-production.up.railway.app/upload",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			if (response.data.isSuccess) {
				const successData = response.data as SuccessResponse;
				setDuplicates(successData.data);
				setSuccessMessage(successData.message);
				setPerformanceData({
					totalFiles: successData.performance.totalFiles,
					totalDuplicates: successData.totalDuplicates,
					returnedCount: successData.returnedCount,
				});
			} else {
				setError(response.data.error);
			}
		} catch (error: any) {
			if (error.response?.data?.isSuccess === false) {
				setError(error.response.data.error);
			} else {
				setError("An error occurred while uploading files. Please try again.");
			}
		} finally {
			setLoading(false);
		}
	};

	const handleClear = () => {
		setFiles(null);
		setDuplicates([]);
		setError(null);
		setSuccessMessage(null);
		setPerformanceData(null);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles theme={theme} />
			<SocialMediaButton />
			<AppContainer>
				{loading && <Loading />}

				<Header />

				<MainContent>
					<Container>
						<UploadArea
							files={files}
							onFileChange={handleFileChange}
							onUpload={handleUpload}
							onClear={handleClear}
							loading={loading}
						/>
						{error && (
							<Alert variant="error" title="Error">
								{error}
							</Alert>
						)}
						{successMessage && (
							<Alert variant="success" title="Success">
								{successMessage}
								{performanceData && (
									<div style={{ marginTop: "12px" }}>
										<p>
											📁 Total files processed: <strong>{performanceData.totalFiles}</strong>
										</p>
										<p>
											🔍 Duplicate pairs found: <strong>{performanceData.totalDuplicates}</strong>
										</p>
										{performanceData.returnedCount > 0 && (
											<p>
												📋 Results shown: <strong>{performanceData.returnedCount}</strong>
											</p>
										)}
									</div>
								)}
							</Alert>
						)}
						{duplicates.length > 0 && <DuplicateResults duplicates={duplicates} />}
					</Container>
				</MainContent>
				<Footer />
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
