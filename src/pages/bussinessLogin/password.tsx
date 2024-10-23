import React from "react";
import {
  Box,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "@mui/material/styles";
import {
  AccountCreationBtn,
  ContinueBtn,
  Footer,
  Input,
} from "../../components";
import Header from "../../components/Header";


const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export const Password = () => {
  return (
    <>
    <Header />
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
      <Box
        sx={{
          border: "1px solid #ddd",
          width: "350px",
          height: "248px",
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
            Enter your password
          </Typography>
          <Input/>
          <ContinueBtn /> {/* button component creation  */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ArrowRightIcon sx={{ color: "black" }} />
            <Link href="#" sx={{ color: "blue" }}>
              <Typography component={"span"} sx={{ fontSize: "12px" }}>
                {" "}
                Need help?
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "350px" }}>
        <Root>
          <Divider>
            <Typography
              sx={{ color: "#767676", fontWeight: "400", fontSize: "12px" }}
            >
              New to Amazon?
            </Typography>
          </Divider>
        </Root>
        <AccountCreationBtn /> {/* button component creation  */}
      </Box>
    </Box>

    <Footer />
  </>
  );
};
