import React from 'react';
import { StyledCard, CardProps } from './Card.styles';

interface Props extends CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<Props> = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  className,
  ...props 
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
}; 