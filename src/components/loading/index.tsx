import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { LoaderContainer } from './style';


const LoadingComponent: React.FC = () => (
  <LoaderContainer>
    <PacmanLoader color="#fff" loading={true} size={50} />
  </LoaderContainer>
);

export default LoadingComponent;