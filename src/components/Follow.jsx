import { Typography } from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';

const Follow = () => {
  return (
    <div className="mt-8 mb-12 flex flex-col items-center">
      {/* no color in dark mode */}
      <Typography style={{fontSize:"26px", color:"#000"}}>FOLLOW US ON</Typography>
      {/* color #CFC8BD in dark mode */}
      <div className="flex flex-row gap-x-2 mt-2" style={{color:"#fff"}}>
        <div
          className="flex items-center justify-center"
          // background color #145170
          style={{
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
            backgroundColor: "#CC2439",
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
