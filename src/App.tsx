import React, { useState } from "react";
import axios from "axios";
import Header from "./components/header";
import "./index.css";
import UploadArea from "./components/uploadArea";
import { DuplicateImage } from "./Types/type";
import UpladedImagesArea from "./components/uploadedImagesArea";
import LoadingComponent from "./components/loading";
import SocialMediaButton from "./components/contact";

const App: React.FC = () => {
	const [files, setFiles] = useState<FileList | null>(null);
	const [duplicates, setDuplicates] = useState<DuplicateImage[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

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
		const formData = new FormData();

		for (let i = 0; i < files.length; i++) {
			formData.append("file", files[i]);
		}

		try {
			const response = await axios.post("http://3.8.140.145:5000/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			setDuplicates(response.data.data);
		} catch (error) {
			setError("An error occurred while uploading files.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			{loading && <LoadingComponent />}
			<Header />
			<UploadArea
				handleUpload={handleUpload}
				loading={loading}
				handleFileChange={handleFileChange}
				setFiles={setFiles}
				setDuplicates={setDuplicates}
			/>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{duplicates.length > 0 && <UpladedImagesArea duplicates={duplicates} />}
			<SocialMediaButton />
		</div>
	);
};

export default App;
