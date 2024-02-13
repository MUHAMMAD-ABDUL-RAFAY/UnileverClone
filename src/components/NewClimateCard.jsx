import { Card } from "react-bootstrap";
import React from 'react'
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const NewClimateCard = () => {
  return (
    <>
        <Card className="flex flex-col" style={{marginLeft:"10%",marginRight:"10%",backgroundColor:"#efefef",color:"#000",borderRadius:"1rem"}}>
            <Card.Img
              style={{
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
              }}
              variant="top"
              src="windmillCard.jpg"
            />
            <Card.Body
              style={{
                // #FFF for border in dark mode
                border: "1px solid #D4D4D4",
                padding: "2rem 1rem 2rem 1rem",
                borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem",
                height:"fit-content"
              }}
            >
              <Card.Title
                style={{
                  fontSize: "1.6875rem",
                  fontWeight: "400",
                  lineHeight: "1.2222em",
                }}
              >
                Our road to net zero
              </Card.Title>
              <Card.Text style={{ fontSize: "1rem",marginTop:"1rem",color:"grey" }}>
                Colgate has set out a clear road map for achieving net zero emissions by 2050, at the latest. We are taking action in our operations, supply chains and portfolio of products, while advocating for broader societal changes. As a result of our actions to date, we have already put peak carbon behind us: our greenhouse gas emissions have fallen below our 2018 baseline, even as we have grown - a clear sign that we are making progress on out Net Zero Roadmap.
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
    </>
  )
}

export default NewClimateCard