import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const ResultsHeader = styled.div`
  text-align: center;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const ResultsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[800]};
  margin: 0;
`;

export const DuplicateGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const DuplicatePair = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  flex: 1;
  max-width: 300px;
`;

export const DuplicateImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: contain;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing[4]};
  transition: all ${({ theme }) => theme.animation.duration.normal} ${({ theme }) => theme.animation.easing.easeInOut};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    transform: scale(1.05);
  }
`;

export const ImageInfo = styled.div`
  text-align: center;
  width: 100%;
`;

export const ImageName = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0;
  word-break: break-all;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

export const ComparisonIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.warning[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.warning[50]};
  border: 2px solid ${({ theme }) => theme.colors.warning[200]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: rotate(90deg);
    width: 50px;
    height: 50px;
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`; 