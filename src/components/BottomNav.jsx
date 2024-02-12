import { Typography, Button } from "@mui/material";
import React from "react";
// #17668C
const BottomNav = () => {
  return (
    <div className="flex items-center justify-evenly px-8 py-12" style={{ backgroundColor: "#17668C"}}>
      <div className="flex flex-col gap-y-4">
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#E5E0D8"}} >Nestle News</Typography>
        <Typography style={{color:"#E5E0D8"}} >Sign up for Global Nestle <br />News</Typography>
        <Button style={{color:"#17668C",backgroundColor:"#E5E0D8"}}>Sign up</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        <Typography style={{fontSize:"22px",lineHeight:"25px",color:"#E5E0D8"}} >Compliance <br />Concern</Typography>
        <Typography style={{color:"#E5E0D8"}} >Speak Up about your <br />concerns</Typography>
        <Button style={{border:"1px solid #E5E0D8",color:"#E5E0D8"}}>Speak up</Button>
      </div>
      <img src="/worldmapwebsite.png" height='100px' width='150px' alt="World Map" />
      <div className="flex flex-col gap-y-4">
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#E5E0D8"}} >Contact us</Typography>
        <Typography style={{color:"#E5E0D8"}} >Across the globe, we are <br /> here to help answer your <br /> queries</Typography>
        <Button style={{border:"1px solid #E5E0D8",color:"#E5E0D8"}} >Contact us</Button>
      </div>
    </div>
  );
};

export default BottomNav;
