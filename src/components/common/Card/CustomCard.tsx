import React from 'react';
import MuiCard from '@mui/material/Card';
import { CardProps } from '@mui/material';

type CustomCardProps = {
  shadow?: boolean;
} & CardProps;

const CustomCard: React.FC<CustomCardProps> = ({ sx, shadow = true, ...props }) => {
  const defaultStyles = {
    boxShadow: shadow ? '0px 0px 8px -1px rgba(24, 58, 96, 0.20)' : 'initial',
    border: shadow ? 'initial' : `1.5px solid rgba(24, 58, 96, 0.07)`,
    borderRadius: '5px',
    ...sx,
  };

  return <MuiCard sx={defaultStyles} {...props} />;
};

export { CustomCard };
