import React, { useEffect } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  const isSmallDevice = window.innerWidth < 480;
  const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
  useEffect(() => {
    console.log(isSmallDevice, isMediumDevice);
  }, [isSmallDevice, isMediumDevice]);
  return (
    <div
      className={`${
        isMediumDevice || isSmallDevice ? "flex justify-between gap-x-16" : ""
      }`}
      style={{ backgroundColor: "#2A2C2C", padding: "1% 10%" }}
    >
      <div
        className={`flex ${
          isMediumDevice || isSmallDevice ? "flex-col w-[50%] text-center" : ""
        } justify-evenly`}
        style={{ color: "#CFC8BD" }}
      >
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          {" "}
          <CopyrightIcon sx={{ fontSize: "15px" }} /> 2023 Nestle
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>Site map</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>Help</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>Privacy</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>Cookies</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Terms of use
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Accessibility
        </a>
      </div>
      <div
        className={`flex ${
          isMediumDevice || isSmallDevice ? "flex-col w-[50%] text-center" : ""
        } justify-evenly`}
        style={{ color: "#CFC8BD" }}
      >
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Carbon efficiency
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Suppliers
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Social media
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>RSS</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>Sign up</a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Unsubscribe
        </a>
        {isSmallDevice || isMediumDevice ? <hr /> : "|"}
        <a style={{ marginBottom: isMediumDevice || isSmallDevice ? "0.2rem" : "" }}>
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Footer;
