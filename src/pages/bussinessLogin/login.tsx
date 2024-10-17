import React from "react";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Login = () => {
  return (
    <>
      {/* <Box sx={{ backgroundColor: "#ffff", height: "100%", width: "100%" }}>
        <Box sx={{ width: "100%", height: "100%" }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid item xs={12} md={1} sx={{ paddingTop: "12px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://m.media-amazon.com/images/G/31/rainier/nav/sc-unified._CB485930462_.png"
                style={{ width: "200px", height: "25px" }}
              />
            </Grid>
            <Grid item xs={12} md={8} sx={{marginLeft: '32%'}}>
              <Box sx={{ border: "1px solid black", borderRadius: "25px", height: '350px', width: '45%' }}>
               <Typography component={'h3'} sx={{color :'black', fontSize: '28px',lineHeight: '1.2', fontWeight: '400',marginLeft: '30px', marginTop: '15px'}}>Sign-In</Typography>
              </Box>
            </Grid>
            
            
          </Grid>
        </Box>
      </Box> */}
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
          src="https://m.media-amazon.com/images/G/31/rainier/nav/sc-unified._CB485930462_.png"
          alt="logo"
        />

        <Box
          sx={{
            border: "1px solid #ddd",
            width: "350px",
            height: "248px",
            borderRadius: "8px",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              color: "black",
              padding: "14px 28px",
              fontFamily: "Arial,sans-serif",
              lineHeight: "2.2",
            }}
          >
            <Typography
              component={"h1"}
              sx={{ fontSize: "28px", fontWeight: "500" }}
            >
              Sign-In
            </Typography>
            <Typography
              component={"span"}
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                padding: "0px 0px 2px 2px",
              }}
            >
              Email or mobile phone number
            </Typography>
            <TextField fullWidth size="small"></TextField>
            <Button
              fullWidth
              sx={{
                background: "#ffd100",
                color: "#0F1111",
                marginTop: "13px",
                marginBottom: '30px'
              }}
            >
              <Typography
                component={"span"}
                sx={{ fontSize: "11px", fontWeight: "500" }}
              >
                Continue
              </Typography>
            </Button>
              <Link href="#" sx={{ color: "blue" }}>
                <Typography component={'span'} sx={{ fontSize: "12px" }}>  <ArrowRightIcon/>  Need help?</Typography>
              </Link>
            
          </Box>

        </Box>
        
      </Box>
    </>
  );
};
