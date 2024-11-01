import React from "react";
import {
  Box,
  Typography,
  Link,
  List,
  Radio,
  RadioGroup,
  Collapse,
  ListItemButton,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const UpdateTaxDetail = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            borderRadius: "8px",
            marginTop: "20px",
            marginBottom: "24px",
          }}
        >
          <Box sx={{ padding: "11px 16px" }}>
            <Typography
              sx={{ fontWeight: "600", fontSize: "20px", color: "#ecd248eb" }}
              component={"h1"}
            >
              Update your Tax details
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="GSTIN number"
                  control={<Radio />}
                  label="I have GSTIN number"
                  sx={{ fontSize: "15px" }}
                />
                <FormControlLabel
                  value="without GSTIN number"
                  control={<Radio />}
                  label="I do not have GSTIN number"
                  sx={{ fontSize: "15px" }}
                />

                <ListItemButton onClick={handleClick}>
                  <FormControlLabel
                    value="not GSTIN number"
                    control={<Radio />}
                    label="Need help with GST registration"
                    sx={{ fontSize: "15px" }}
                  />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <Link
                        href="#"
                        sx={{
                          color: "blue",
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Avail 1-Click Launch Support
                      </Link>
                    </ListItemButton>
                  </List>
                </Collapse>

                <FormControlLabel
                  value="Self submit"
                  control={<Radio />}
                  label="Apply by self"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
};
