import React from 'react';
import { Button as ButtonMUI, type ButtonProps } from '@mui/material';

type CustomButtonProps = {
  label: string;
} & ButtonProps;
const Button: React.FC<CustomButtonProps> = ({ sx, label = 'Button', ...props }) => {
  const defaultStyles = {
    minWidth: 'fit-content',
    padding: '5px',
    ...sx,
  };

  return (
    <ButtonMUI sx={defaultStyles} {...props}>
      {label}
    </ButtonMUI>
  );
};

export default Button;
