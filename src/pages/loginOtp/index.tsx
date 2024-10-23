import React, { useState } from "react";
import Header from "../../components/Header";
import { Box, Typography, Link } from "@mui/material";
import { AccountCreationBtn, Input } from "../../components";

export const LoginOtp = () => {
  const [number, useNumber] = useState(35254545);
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffff",
          padding: "16px 0px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ddd",
            width: "400px",
           
            borderRadius: "8px",
            marginTop: "20px",
            marginBottom: "24px",
          }}
        >
          <Box
            sx={{
              color: "black",
              padding: "14px 28px",
              fontFamily: "Arial,sans-serif",
              //   lineHeight: "2.2",
              flexDirection: "column",
            }}
          >
            <Typography
              component={"h1"}
              sx={{
                fontSize: "28px",
                fontWeight: "500",
                letterSpacing: "1.5px",
                padding: "5px 20px",
              }}
            >
              Verify mobile number
            </Typography>
            <Typography component={"p"} sx={{ fontSize: "15px" }}>
              A text with a One Time Password (OTP) has been sent to your mobile
              number:{" "}
              <span
                style={{
                  fontWeight: "900",
                  letterSpacing: "1px",
                  paddingRight: "8px",
                }}
              >
                {number}
              </span>
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Change
              </Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0px",
              }}
            >
              <Typography
                component={"h4"}
                sx={{ fontWeight: "600", fontSize: "15px" }}
              >
                Enter Otp:
              </Typography>
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Resend OTP
              </Link>
            </Box>
            <Input />
            <AccountCreationBtn sx={{ backgroundColor: "#ffca00c7" }} />
            <Typography component={"p"} sx={{fontSize: '13px'}}>
              By creating an account you agree to Amazon's{" "}
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Conditions of Use & Sale.
              </Link>
              Please see our{" "}
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Privacy Notice,
              </Link>{" "}
              our{" "}
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Cookies Notice
              </Link>{" "}
              and out{" "}
              <Link href="#" sx={{ color: "#1472cf", textDecoration: "none" }}>
                Interest-Based Ads Notice.
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
