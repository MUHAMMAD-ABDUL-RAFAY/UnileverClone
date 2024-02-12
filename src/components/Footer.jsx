import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#2A2C2C",padding:"1% 10%" }}>
      <div className="flex justify-evenly" style={{color:"#CFC8BD"}}>
        <a> <CopyrightIcon /> 2023 Nestle</a>
        |
        <a>Site map</a>
        |
        <a>Help</a>
        |
        <a>Privacy</a>
        |
        <a>Cookies</a>
        |
        <a>Terms of use</a>
        |
        <a>Accessibility</a>
      </div>
      <div className="flex justify-evenly" style={{color:"#CFC8BD"}}>
        <a>Carbon efficiency</a>
        |
        <a>Suppliers</a>
        |
        <a>Social media</a>
        |
        <a>RSS</a>
        |
        <a>Sign up</a>
        |
        <a>Unsubscribe</a>
        |
        <a>Contact us</a>
      </div>
    </div>
  );
};

export default Footer;
