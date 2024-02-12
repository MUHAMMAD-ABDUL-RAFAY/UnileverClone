import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StatsDiv from "./StatsDiv";
const InfoPage = () => {
  return (
    <div className="mt-4 flex gap-x-4 mb-16">
      <div className="flex flex-col justify-evenly" style={{ width: "50%",marginLeft:"10%"}}>
        <StatsDiv headingText={"6.4"} sign={"million tonnes"} bottomText={"CO2e reductions compared with a business-as-usual scenario"} />
        <StatsDiv headingText={"129.2"} sign={"million tonnes"} bottomText={"servings of affordable nutrition with micronutrient fortification. The figure rises to 211.4 billion servings for our total product portfolio"} />
        <StatsDiv headingText={"30.2%"} sign={""} bottomText={"of our top 200+ senior executive positions are held by women (up from 25.6% in 2020 and achieving our target)"} />
      </div>
      <div style={{ width: "50%",marginRight:"10%" }}>
        <Card style={{ backgroundColor: "#17668C", borderRadius: "1rem" }}>
          <Card.Img
            style={{
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            variant="top"
            src="/cardImage.jpg"
          />
          <Card.Body style={{ padding: "1rem 1.5rem 2rem 1.5rem" }}>
            <Card.Title
              style={{
                fontSize: "1.6875rem",
                fontWeight: "400",
                marginBottom: "16px",
                color: "#E8E5E2",
              }}
            >
              Our approach
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1.1rem",
                marginBottom: "24px",
                color: "#E8E5E2",
              }}
            >
              At Nestle, we are making it our business to advance regenerative
              food systems at scale - our own resilience and success depend on
              it. We are playing our part in developing global food systems that
              put people first and contribute to the resilience and well-being
              of farming communities where we source raw materials, all while
              aiming to protect, renew and restore the environment.
            </Card.Text>
            <div className="flex items-center">
              <Button
                variant="primary"
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  color: "#E8E5E2",
                }}
              >
                READ MORE
              </Button>
              <ArrowForwardIcon
                style={{ fontSize: "20px", color: "#E8E5E2" }}
              />
              
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InfoPage;
