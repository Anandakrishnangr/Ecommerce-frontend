import TextField from '@mui/material/TextField';

export const Input = () => {
  return (
    <>
<TextField 
    fullWidth 
  id="outlined-basic" 
  variant="outlined" 

  InputProps={{
    sx: {
      "& .MuiInputBase-input": {
        padding: "4px",
      }
    }
  }}
/>
    </>
  );
};
