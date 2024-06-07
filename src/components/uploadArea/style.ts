import styled from "styled-components";

export const UploadAreaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background-color: #d1ccc0;
`;

export const StyledUploadInput = styled.input.attrs({ type: "file" })`
	display: none;
`;

export const StyledUploadLabel = styled.label`
	background-color: #40407a;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 24px;
	margin: 4px 2px;
	cursor: pointer;
	transition-duration: 0.4s;
	overflow: hidden;
	border-radius: 10px;

	&:hover {
		background-color: white;
		color: #706fd3;
	}
`;

export const StyledUploadButton = styled.button`
	background-color: #40407a;
	border: none;
	color: white;
	padding: 10px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 24px;
	margin: 4px 2px;
	cursor: pointer;
	transition-duration: 0.4s;
	overflow: hidden;
	border-radius: 10px;
	font-family: "Anton", sans-serif;
	&:hover {
		background-color: white;
		color: #706fd3;
	}
`;

export const UploadButton = styled.button`
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;

export const UploadedImagesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-height: 20vh;
	overflow-y: auto;
	margin: 20px 0;
`;

export const ImagePreview = styled.img`
	width: 50px;
	height: 50px;
	object-fit: contain;
	margin: 10px;
`;
