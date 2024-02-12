import { Typography } from "@mui/material";
import React from "react";

const UsefulLinks = () => {
  return (
    <div
      className="mt-16 flex pb-16"
      style={{ marginLeft: "10%", marginRight: "10%" }}>
      <div style={{ width: "50%" }}>
        <div className="flex flex-col gap-y-8">
          <Typography style={{color:"#B5AE88",fontSize:"26px"}} >Nestle</Typography>
          <Typography style={{color:"#E5E0D8",fontSize:"24px"}}>
            We unlock the power of food to enhance quality of life for everyone,
            today and for generations to come
          </Typography>
          <img className="mt-12" src="/nestlelogo.svg" width="120px" height="85px" style={{color:"#CFC18E"}} alt="Nestle Logo" />          
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <div className="flex flex-col gap-y-4" style={{}}>
            <hr style={{color:"#7D7B78"}} />
            <Typography style={{color:"#B5AE88",fontSize:"16px",fontWeight:"400"}} >Useful Links</Typography>
            <Typography style={{color:"#E5E0D8",fontSize:"0.875em",fontWeight:"200"}}>Ask Nestle (FAQs)</Typography>
            <Typography style={{color:"#E5E0D8",fontSize:"0.875em",fontWeight:"200"}}>Contact us</Typography>
            <Typography style={{color:"#E5E0D8",fontSize:"0.875em",fontWeight:"200"}}>Search for jobs</Typography>
            <Typography style={{color:"#E5E0D8",fontSize:"0.875em",fontWeight:"200"}}>Sign up for news</Typography>
            <Typography style={{color:"#E5E0D8",fontSize:"0.875em",fontWeight:"200"}}>Speak Up</Typography>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
