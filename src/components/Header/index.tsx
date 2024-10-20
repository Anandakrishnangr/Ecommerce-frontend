import React from "react";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffff",
          width: "100%",
          padding: "16px 0px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "170px", height: "30px" }}
          src="/src/assets/sc-unified._CB485930462_.png"
          alt="logo"
        />
      </Box>
    </>
  );
};

export default Header;
