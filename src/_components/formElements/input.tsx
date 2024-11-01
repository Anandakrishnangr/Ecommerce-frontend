
import React from 'react';
import { TextField, Box, Typography } from '@mui/material';
export const Inputoutline = () => {
  return <TextField id="outlined-basic" label="Outlined" variant="outlined" />
};

export const Input = () => {
  return <TextField fullWidth size="small"/>
}



interface CustomInputProps {
  label?: string;           // Optional label to display above the input
  placeholder?: string;     // Optional placeholder for the input
  value: string;            // Value of the input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for input changes
  type?: string;            // Optional type of the input, e.g. 'text', 'password'
  fullWidth?: boolean;      // Optional flag to make the input take the full width
  [key: string]: any;       // Allows passing additional props
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  fullWidth = false,
  ...props
}) => {
  return (
    <Box sx={{ mb: 2, width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <Typography variant="body1" sx={{ mb: 1 }}>
          {label}
        </Typography>
      )}
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        fullWidth={fullWidth}
        {...props}
      />
    </Box>
  );
};

export default CustomInput;
