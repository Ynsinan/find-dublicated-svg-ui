import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[8]} 0;
`; 