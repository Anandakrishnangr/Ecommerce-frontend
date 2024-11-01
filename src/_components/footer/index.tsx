import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#80808017",
          height: "270px",
          width: '100%'
        }}
      >
        <Typography
          sx={{ paddingTop: "10%", fontSize: "11px", color: "#555555" }}
        >
          {" "}
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </Typography>
      </Box>
    </>
  );
};


