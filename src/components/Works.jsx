import { Button, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Works = () => {
  const cardHeadings = {
    "Climate action": [
      "/climateAction.jpg",
      "We have put peak carbon behind us and aim to halve greenhouse gas emissions by 2030.",
    ],
    "Waste Reduction": [
      "/wasteCard.jpg",
      "Our ambition is a future where none of our packaging ends up in landfill or as litter.",
    ],
    "Protecting Nature": [
      "/natureCard.jpg",
      "We remain focused on achieving and maintaining 100% deforestation-free primary supply chains for meat, palm oil, pulp and paper, soy and sugar, and aim to do so by 2025 for coffee and cocoa.",
    ],
    "Water stewardship": [
      "/watercanalCard.jpg",
      "Nestle aims to reduce water use in our factories by 6 miilion m3 between 2021 and 2023.",
    ],
    "Human rights": [
      "/humanrightsCard.jpg",
      "We have published action plans for each of the salient issues in our Human Rights Framework and Roadmap and aim to report our progress against them by 2025.",
    ],
    "Sustainably sourced raw materials": [
      "/rawmaterialsCard.jpg",
      "We aim for 100% of our key ingredients to be produced sustainable by 2030.",
    ],
    "Taking care of people and communities": [
      "/communityCard.jpg",
      "We respect and encourage all our employees and value their potential. At the same time, we are working to boost the well-being of communities and enable a just transition to regenerative practices.",
    ],
    "Ethical and responsible business practices": [
      "/businessforestroadCard.jpg",
      "We continue working to generate trust as an ethical and sustainable business: to inspire industry and collaborate with our peers to make changes that help in the transition toward regenrative food systems.",
    ],
    "Performance and reporting": [
      "/reportingcenterfarmCard.jpg",
      "Transparent, public reporting on our activities, commitments and performance is embedded in how we do business at Nestle.",
    ],
  };
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "4rem",
        marginBottom: "2rem",
      }}
    >
      <Typography style={{ fontSize: "1.55rem", fontWeight: "200" }}>
        Sustainability through Nestle
      </Typography>
      <div className="grid mt-8" style={{gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",gridGap:"1.25rem"}}>
        {Object.keys(cardHeadings).map((heading) => (
          // no color,backgroundcolor for card in dark mode
          <Card key={heading} className="flex flex-col" style={{backgroundColor:"#efefef",color:"#000",borderRadius:"1rem"}}>
            <Card.Img
              style={{
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
              }}
              variant="top"
              src={cardHeadings[heading][0]}
            />
            <Card.Body
              style={{
                // #FFF for border in dark mode
                border: "1px solid #D4D4D4",
                padding: "2rem 1rem 2rem 1rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                height:"350px"
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.6875rem",
                  fontWeight: "400",
                  lineHeight: "1.2222em",
                }}
              >
                {heading}
              </Card.Title>
              <Card.Text style={{ fontSize: "1rem",marginTop:"1rem" }}>
                {cardHeadings[heading][1]}
              </Card.Text>
              <div className="flex items-center mt-4">
                {/* button color #4f97b8 , no backgroundColor in dark mode*/}
                {/* color for ArrowIcon #4f97b8 */}
                <Button style={{color:"#fff",backgroundColor:"#CC2439"}} >READ MORE <ArrowForwardIcon
                  style={{ fontSize: "20px", color: "#fff" }}
                /> </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Works;
