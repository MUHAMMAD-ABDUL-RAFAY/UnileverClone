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
    // backgroundColor #17668C in dark mode
    <div className={`flex ${(isSmallDevice || isMediumDevice) ? "flex-col gap-y-12" :"flex-row"} ${(isSmallDevice || isMediumDevice) ? "flex-start" :"items-center"} justify-evenly px-8 py-12`} style={{ backgroundColor: "#efefef"}}>
      <div className={`flex flex-col gap-y-4`}>
        {/* color #E5E0D8 */}
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#000"}} >Colgate News</Typography>
        {/* color #E5E0D8 */}
        <Typography style={{color:"grey"}} >Sign up for Global Colgate <br />News</Typography>
        {/* color #17668C backgroundColor #E5E0D8 */}
        <Button style={{color:"#fff",backgroundColor:"#CC2439"}}>Sign up</Button>
      </div>
      <div className="flex flex-col gap-y-4">
        {/* color #E5E0D8 */}
        <Typography style={{fontSize:"22px",lineHeight:"25px",color:"#000"}} >Compliance <br />Concern</Typography>
        {/* color #E5E0D8 */}
        <Typography style={{color:"grey"}} >Speak Up about your <br />concerns</Typography>
        {/* color #E5E0D8 border #E5E0D8 */}
        <Button style={{border:"1px solid #CC2439",color:"#CC2439"}}>Speak up</Button>
      </div>
      {/* 480 272 */}
      <img src="/worldmapwebsite.png" height= {(isSmallDevice || isMediumDevice) ? '270px' : '100px'} width={(isSmallDevice || isMediumDevice) ? '480px' :'150px'} alt="World Map" />
      <div className="flex flex-col gap-y-4">
        {/* color #E5E0D8 */}
        <Typography style={{fontSize:"22px",lineHeight:"19px",color:"#000"}} >Contact us</Typography>
        {/* color #E5E0D8 */}
        <Typography style={{color:"#grey"}} >Across the globe, we are <br /> here to help answer your <br /> queries</Typography>
        {/* border #E5E0D8 color #E5E0D8 */}
        <Button style={{border:"1px solid #CC2439",color:"#CC2439"}} >Contact us</Button>
      </div>
    </div>
  );
};

export default BottomNav;
