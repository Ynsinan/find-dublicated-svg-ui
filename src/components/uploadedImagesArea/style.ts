import styled from "styled-components";

export const UploadedImagesAreaContainer = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const HeaderTitle = styled.h2`
	margin-bottom: 20px;
`;

export const ImagesWrapper = styled.div`
	width: 100%;
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
`;

export const DublicateImageWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px; // Dolgu ekleyin
    border: 1px solid #706fd3; // Sınır ekleyin
    border-radius: 5px; // Köşeleri yuvarlayın
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); // Bir gölge ekleyin

    &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); // Hover efekti için bir gölge ekleyin
    }
`;
export const ImageWrapper = styled.div`
	width: 300px;
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const FileName = styled.p`
	margin-top: 10px;
`;