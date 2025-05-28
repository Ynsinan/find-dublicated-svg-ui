import styled, { css } from 'styled-components';

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
}

const getVariantStyles = (variant: AlertProps['variant']) => {
  switch (variant) {
    case 'success':
      return css`
        background-color: ${({ theme }) => theme.colors.success[50]};
        border-color: ${({ theme }) => theme.colors.success[200]};
        color: ${({ theme }) => theme.colors.success[800]};
      `;
    
    case 'error':
      return css`
        background-color: ${({ theme }) => theme.colors.error[50]};
        border-color: ${({ theme }) => theme.colors.error[200]};
        color: ${({ theme }) => theme.colors.error[800]};
      `;
    
    case 'warning':
      return css`
        background-color: ${({ theme }) => theme.colors.warning[50]};
        border-color: ${({ theme }) => theme.colors.warning[200]};
        color: ${({ theme }) => theme.colors.warning[800]};
      `;
    
    default: // info
      return css`
        background-color: ${({ theme }) => theme.colors.primary[50]};
        border-color: ${({ theme }) => theme.colors.primary[200]};
        color: ${({ theme }) => theme.colors.primary[800]};
      `;
  }
};

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid;
  margin: ${({ theme }) => theme.spacing[4]} 0;
  
  ${({ variant }) => getVariantStyles(variant)}
`;

export const AlertIcon = styled.div`
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1;
`;

export const AlertContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const AlertTitle = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

export const AlertDescription = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  
  p {
    margin: 0;
  }
  
  p + p {
    margin-top: ${({ theme }) => theme.spacing[2]};
  }
`; 