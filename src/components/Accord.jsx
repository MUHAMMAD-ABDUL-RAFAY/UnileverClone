import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accord = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      {/* backgroundColor #2a2c2c */}
      <Accordion style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
        // color #CFC8BD
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {/* color #CFC8BD */}
          <Typography style={{ color: "#000" }}>COMPANY</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="flex flex-col gap-y-2">
            <a>Global addresses</a>
            <a>Strategy</a>
            <a>Our leadership</a>
            <a>Brands A - Z</a>
            <a>Our history</a>
            <a>Sustainability</a>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* backgroundColor #2a2c2c */}
      <Accordion style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
        // color #CFC8BD
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {/* color #CFC8BD */}
          <Typography style={{ color: "#000" }}>DOWNLOADS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-y-2">
            <a>Annual Review (pdf, 17Mb)</a>
            <a>CSV and Sustainability Report (pdf, 15Mb)</a>
            <a>Responsible Sourcing Standard (pdf, 2Mb)</a>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* backgroundColor #2a2c2c */}
      <Accordion style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
        // color #CFC8BD
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {/* color #CFC8BD */}
          <Typography style={{ color: "#000" }}>OTHER COLGATE BUSINESSES</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="flex flex-col gap-y-2">
            <a>Colgate Health Science</a>
            <a>Colgate Nespresso</a>
            <a>Colgate Purina Petcare</a>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* backgroundColor #2a2c2c */}
      <Accordion style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
        // color #CFC8BD
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {/* color #CFC8BD */}
          <Typography style={{ color: "#000" }}>MEDIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="flex flex-col gap-y-2">
            <a>News</a>
            <a>Media contacts</a>
            <a>Images</a>
          </div>
        </AccordionDetails>
        {/* backgroundColor #2a2c2c */}
      </Accordion>
      <Accordion style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
        // color #CFC8BD
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {/* color #CFC8BD */}
          <Typography style={{ color: "#000" }}>INVESTORS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="flex flex-col gap-y-2">
            <a>Corporate governance</a>
            <a>Shares, ADRs, & Bonds</a>
            <a>Publications</a>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4" style={{ backgroundColor: "#efefef" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#000" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#000" }}>SHARE INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <a>Share Price</a>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accord;
