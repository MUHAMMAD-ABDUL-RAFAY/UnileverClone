import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accord = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "10%" }}>
      <Accordion style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>COMPANY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>DOWNLOADS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>OTHER COLGATE BUSINESSES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>MEDIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>INVESTORS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-4" style={{ backgroundColor: "#2A2C2C" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#CFC8BD" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: "#CFC8BD" }}>SHARE INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography style={{fontSize:"0.875rem",color:"#CFC8BD"}}>Share Price</Typography>
    </div>
  );
};

export default Accord;
