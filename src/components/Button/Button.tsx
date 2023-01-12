import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import React from 'react';

interface ButtonProps extends MUIButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  return <MUIButton {...props} />;
};

export default Button;
