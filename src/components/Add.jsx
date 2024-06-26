import { Button } from "@mui/material";
import React, { useEffect } from "react";

const Add = () => {
  const isSmallDevice = window.innerWidth < 480;
  const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
  useEffect(() => {
    console.log(isSmallDevice, isMediumDevice);
  }, [isSmallDevice, isMediumDevice]);

  return (
    <div
      className="mt-16 mb-12"
      style={{
        // backgroundColor: "#16696f",
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: "#CC0000",
        borderRadius: "1rem",
      }}
    >
      <div
        className={`${(isSmallDevice || isMediumDevice) ? "flex-col items-center gap-y-8" : ""} flex justify-around`}
        style={{ padding: "1.5rem 5% 0rem 5%", alignItems: (isSmallDevice || isMediumDevice) ? "" : "flex-start" }}
      >
        <img
          src="/addimage.jpg"
          alt="img"
          style={{ width: "200px", height: "112px" }}
          className={`${(isSmallDevice || isMediumDevice) ? "order-3" : ""}`}
        />
        <div
          className={`${(isSmallDevice || isMediumDevice) ? "order-1" : ""} text-center`}
          style={{
            fontSize: "2rem",
            fontWeight: "200",
            lineHeight: "1.25",
            // #D1CBC5 in dark mode
            color: "#fff",
          }}
        >
          Creating Shared Value <br />
          and Sustainability Report
        </div>
        {/* #D1CBC5 in border and color in dark mode */}
        <Button className={`${(isSmallDevice || isMediumDevice) ? "order-2" : ""}`} style={{ border: "1px solid #fff", color: "#fff" }}>
          Download <br /> the pdf <br />
          (15MB)
        </Button>
      </div>
    </div>
  );
};

export default Add;
