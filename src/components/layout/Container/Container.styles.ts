import styled from 'styled-components';

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%'
};

const paddings = {
  none: '0',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem'
};

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth = 'xl' }) => maxWidths[maxWidth]};
  margin: 0 auto;
  padding: 0 ${({ padding = 'md' }) => paddings[padding]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing[4]};
  }
`; 