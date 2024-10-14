import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';


export  function Rangeslider() {
  
  
  
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          valueLabelDisplay="auto"
        />
      </Box>
    );
  }