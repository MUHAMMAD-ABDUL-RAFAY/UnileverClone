import React, { useState } from "react";
import PagesNav from "./PagesNav";
import {
  Typography,
  Switch,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#242525",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#00818F",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#CCCCCC" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const [color, setColor] = useState("");
  const searchSugesstions = ["Careers", "Brands", "Sustainability at Nestle"];
  const searchTitle = ["Suggested Pages"];
  const defaultProps = {
    options: searchSugesstions,
  };
  const handleHover = (hovering) => {
    // #007CBA -> blue
    hovering ? setColor("#007cba") : setColor("");
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center mr-8" style={{placeContent:'flex-end'}}>
        <div className="flex">
          <Typography className="mr-1" style={{ fontSize: "1em", color:"#B5AEA2"}} >Dark mode</Typography>
          <InfoIcon
            style={{ cursor: "pointer", color: color }}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          />
        </div>
        <IOSSwitch sx={{ m: 1 }}  />
        <div className="flex ml-8" style={{ columnGap: "3px" }}>
          <Button
            className="flex justify-evenly"
            style={{
              color: "#aca496",
              backgroundColor: "#2F3131",
              fontSize: "0.7rem",
            }}
          >
            <LanguageIcon
              sx={{
                marginRight: "0.2em",
              }}
              style={{ color: "#aca496" }}
            />
            You are in our Global Site <KeyboardArrowDownIcon />{" "}
          </Button>
          <Button
            style={{
              backgroundColor: "#155472",
              color: "#DBE0D8",
              fontSize: "0.7rem",
            }}
          >
            Contact us
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-evenly mt-8 mx-8">
        <img src={logo} alt="logo" style={{ maxWidth: "363px" }} />
        <Autocomplete style={{width:"30%"}}
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField sx={{input: {color:'white'},'&::placeholder': {color: 'white'}}} {...params} style={{color:"white"}} label="Search" variant="standard" />
          )}
      />
      </div>
      <PagesNav />
    </div>



    
  );
};

export default Navbar;
