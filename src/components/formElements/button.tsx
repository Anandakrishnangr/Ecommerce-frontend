import { Button as MuiButton } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

export const ButtonContained = () => {
  return (
    <div>
      <MuiButton variant="contained">Contained</MuiButton>
    </div>
  );
};

export const ButtonOutlined = () => {
  return (
    <div>
      <MuiButton variant="outlined">Outlined</MuiButton>
    </div>
  );
};

export const Closebutton = () => {
  return (
    <>
      <MuiButton variant="outlined">
        <ClearOutlinedIcon />
      </MuiButton>
    </>
  );
};

export const AmazonAccountCreationBtn = () => {
  return (
    <MuiButton
      variant="contained"
      disableElevation
      fullWidth
      sx={{
        backgroundColor: "#e7e9ec",
        color: "#0F1111",
        marginTop: "13px",
        marginBottom: "30px",
        borderRadius: "3px",
        fontSize: "10px",
        lineHeight: "29px",
        fontWeight: "500",
      }}
    >
      Create your Amazon account
    </MuiButton>
  );
};

export const ContinueBtn = () => {
  return (
    <MuiButton
      fullWidth
      sx={{
        background: "#ffd100",
        color: "#0F1111",
        marginTop: "13px",
        marginBottom: "30px",
        fontSize: "11px",
        fontWeight: "500",
      }}
    >
      Continue
    </MuiButton>
  );
};
