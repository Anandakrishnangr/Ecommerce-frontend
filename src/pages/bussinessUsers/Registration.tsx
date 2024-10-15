import { Grid } from "@mui/joy";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ButtonContained, Input } from "../../components";

export const Registration = () => {
    const [name, setname] = useState("continue")
  return (
    <>
      <Grid
        container
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          padding: "8px 16px",
          backgroundColor: "white",
          zIndex: 1000,
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/amazone.png"
          alt="Amazon Logo"
          sx={{
            height: "100px",
            width: "auto",
            borderRadius: "4px",
            paddingBottom: "8px",
            boxShadow: "none",
            cursor: "pointer",
            transition: "opacity 0.3s ease-in-out",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "20px" }}>
            Seller Central
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", textAlign: "right", marginTop: "-4px" }}
          >
            India
          </Typography>
        </Box>
      </Grid>
      <Grid
        sx={{
          position: "fixed",
          top: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "8px 16px",
          backgroundColor: "white",
          zIndex: 1000,
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "left",
                  marginBottom: "8px",
                }}
              >
                Create Account
              </Typography>
              <Typography sx={{ textAlign: "left", fontWeight: "bold" }}>
                Your name
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  marginLeft: 0,
                }}
              >
                <Input />
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Mobile number
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  marginLeft: 0,
                }}
              > 
                <PhoneInput country={"us"} />
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Email (optional)
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  marginLeft: 0,
                }}
              >
                <Input />
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                Password
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  marginLeft: 0,
                }}
              >
                <Input />
              </Typography>
              <Typography
                sx={{ fontSize: "11px", textAlign: "left", paddingTop: "5px" }}
              >
                Passwords must be at least 6 characters
              </Typography>

              <Typography
                sx={{ fontSize: "13px", textAlign: "left", paddingTop: "10px" }}
              >
                By enrolling your mobile phone number,you consent
                <br />
                to recieve automated security notifications via text
                <br />
                message from Amazon.Message and data rates may
                <br />
                apply.
              </Typography>
              <Typography
                 sx={{
                    paddingTop:"15px"
                 }}
              >
                   <ButtonContained setname={name} />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};
