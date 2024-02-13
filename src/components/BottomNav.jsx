import { Typography, Button } from "@mui/material";
import React,{useEffect} from "react";
// #17668C
const BottomNav = () => {
  const isSmallDevice = window.innerWidth < 480;
  const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
  useEffect(() => {
    console.log(isSmallDevice, isMediumDevice);
  }, [isSmallDevice, isMediumDevice]);
  return (
    <div className={`flex ${(isSmallDevice || isMediumDevice) ? "flex-col gap-y-12" :"flex-row"} ${(isSmallDevice || isMediumDevice) ? "flex-start" :"items-center"} justify-evenly px-8 py-12`} style={{ backgroundColor: "#17668C"}}>
      <div className={`flex flex-col gap-y-4`}>
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#E5E0D8"}} >Colgate News</Typography>
        <Typography style={{color:"#E5E0D8"}} >Sign up for Global Colgate <br />News</Typography>
        <Button style={{color:"#17668C",backgroundColor:"#E5E0D8"}}>Sign up</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Typography style={{fontSize:"22px",lineHeight:"25px",color:"#E5E0D8"}} >Compliance <br />Concern</Typography>
        <Typography style={{color:"#E5E0D8"}} >Speak Up about your <br />concerns</Typography>
        <Button style={{border:"1px solid #E5E0D8",color:"#E5E0D8"}}>Speak up</Button>
      </div>
      {/* 480 272 */}
      <img src="/worldmapwebsite.png" height= {(isSmallDevice || isMediumDevice) ? '270px' : '100px'} width={(isSmallDevice || isMediumDevice) ? '480px' :'150px'} alt="World Map" />
      <div className="flex flex-col gap-y-4">
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#E5E0D8"}} >Contact us</Typography>
        <Typography style={{color:"#E5E0D8"}} >Across the globe, we are <br /> here to help answer your <br /> queries</Typography>
        <Button style={{border:"1px solid #E5E0D8",color:"#E5E0D8"}} >Contact us</Button>
      </div>
    </div>
  );
};

export default BottomNav;
