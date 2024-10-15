import { Button as MuiButton } from "@mui/material";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

export  const ButtonContained = ({ setname }: { setname: string }) => {
  console.log(setname)
  return (
    <div>
      <MuiButton variant="contained" sx={{backgroundColor:"#ffd814",color:"black"}} fullWidth>{setname}</MuiButton>
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




