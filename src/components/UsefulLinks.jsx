import { Typography } from "@mui/material";
import React,{useEffect} from "react";

const UsefulLinks = () => {
  const isSmallDevice = window.innerWidth < 480;
  const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
  useEffect(() => {
    console.log(isSmallDevice, isMediumDevice);
  }, [isSmallDevice, isMediumDevice]);
  return (
    <div
      className={`mt-16 flex ${(isSmallDevice || isMediumDevice) ? 'flex-col' : "flex-row" } pb-16`}
      style={{ marginLeft: "10%", marginRight: "10%" }}>
      <div style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%" }}>
        <div className={`flex flex-col gap-y-8 ${(isSmallDevice || isMediumDevice) ? "mb-12" : ""} `}>
          <Typography style={{color:"#B5AE88",fontSize:"26px"}} >Nestle</Typography>
          <Typography style={{color:"#E5E0D8",fontSize:"24px"}}>
            We unlock the power of food to enhance quality of life for everyone,
            today and for generations to come
          </Typography>
          <img className="mt-12" src="/nestlelogo.svg" width="120px" height="85px" style={{color:"#CFC18E"}} alt="Nestle Logo" />          
        </div>
      </div>
      <div style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%" }}>
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
