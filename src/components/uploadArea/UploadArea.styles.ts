import styled, { css } from 'styled-components';

interface DropZoneProps {
  isDragOver: boolean;
}

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const DropZone = styled.div<DropZoneProps>`
  border: 2px dashed ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
  
  ${({ isDragOver, theme }) =>
    isDragOver &&
    css`
      border-color: ${theme.colors.primary[500]};
      background-color: ${theme.colors.primary[50]};
      transform: scale(1.02);
    `}
`;

export const DropZoneContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  pointer-events: none;
`;

export const DropZoneIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  opacity: 0.6;
`;

export const DropZoneText = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0;
`;

export const DropZoneSubtext = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FileStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.primary[50]};
  border: 1px solid ${({ theme }) => theme.colors.primary[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary[700]};
`;

export const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const PreviewImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PreviewName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[600]};
  text-align: center;
  word-break: break-all;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[6]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`; 