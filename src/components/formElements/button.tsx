import { Button as MuiButton } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export  const ButtonContained = () => {
  return (
    <div>
      <MuiButton variant="contained">Contained</MuiButton>
    </div>
  );
};



export const ButtonOutlined = () =>{
  return (
    <div>
     <MuiButton variant="outlined">Outlined</MuiButton>
    </div>
  );
}


export  const Closebutton =() =>{
  return (
      <>
             <MuiButton variant="outlined">
             <ClearOutlinedIcon />
             </MuiButton>
      </>
  )
}




