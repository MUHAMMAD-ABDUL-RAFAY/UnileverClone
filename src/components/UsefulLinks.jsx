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
          {/* color #B5AE88 in dark mode */}
          <Typography style={{color:"#000",fontSize:"26px"}} >Colgate</Typography>
          {/* color #E5E0D8 in dark mode */}
          <Typography style={{color:"grey",fontSize:"24px"}}>
            We unlock the power of food to enhance quality of life for everyone,
            today and for generations to come
          </Typography>
          {/* /nestlelogo.svg */}
          <img className="mt-12" src="https://colgate.com.pk/wp-content/uploads/2019/11/colgate-logo-desktop.png" width="120px" height="85px" style={{color:"#CFC18E"}} alt="Colgate Logo" />          
        </div>
      </div>
      <div style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%" }}>
        <div className="flex flex-col gap-y-4" style={{}}>
          {/* color #7D7B78 */}
            <hr style={{color:"grey"}} />
            {/* color #B5AE88 */}
            <Typography style={{color:"#000",fontSize:"16px",fontWeight:"400"}} >Useful Links</Typography>
            {/* all colors #E5E0D8 */}
            <Typography style={{color:"grey",fontSize:"0.875em",fontWeight:"200"}}>Ask Colgate (FAQs)</Typography>
            <Typography style={{color:"grey",fontSize:"0.875em",fontWeight:"200"}}>Contact us</Typography>
            <Typography style={{color:"grey",fontSize:"0.875em",fontWeight:"200"}}>Search for jobs</Typography>
            <Typography style={{color:"grey",fontSize:"0.875em",fontWeight:"200"}}>Sign up for news</Typography>
            <Typography style={{color:"grey",fontSize:"0.875em",fontWeight:"200"}}>Speak Up</Typography>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
