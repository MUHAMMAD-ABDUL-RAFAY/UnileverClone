import { Typography } from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';

const Follow = () => {
  return (
    <div className="mt-8 mb-12 flex flex-col items-center">
      <Typography style={{fontSize:"26px"}}>FOLLOW US ON</Typography>
      <div className="flex flex-row gap-x-2 mt-2" style={{color:"#CFC8BD"}}>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <FacebookIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: "#145170",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor:"pointer"
          }}
        >
          <MailIcon />
        </div>
      </div>
    </div>
  );
};

export default Follow;
