import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StatsDiv from "./StatsDiv";
const InfoPage = ({cardHeading,cardText,cardImage,infoCards}) => {
  // const [isSmallDevice,setIsSmallDevice] = useState(window.innerWidth < 480);
  // const [isMediumDevice,setIsMediumDevice] = useState(window.innerWidth >= 480 && window.innerWidth < 768);
  const isSmallDevice = window.innerWidth < 480;
  const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
  // useEffect(() => {
  //   console.log(isSmallDevice,isMediumDevice)
  // },[isSmallDevice,isMediumDevice])

  return (
    
    <div className={`mt-4 flex gap-x-4 mb-16 ${isSmallDevice ? "flex-col items-center gap-y-4" : ""} ${isMediumDevice ? "flex-col items-center gap-y-4" : ""}`}>
      <div className="flex flex-col justify-evenly" style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%", marginLeft: (isSmallDevice || isMediumDevice) ? "" :"10%"}}>
        {
            infoCards.map((card,index) => (
              <StatsDiv key={index} headingText={card[0]} sign={card[1]} bottomText={card[2]} />
            ))
        }
        {/* <StatsDiv headingText={"6.4"} sign={"million tonnes"} bottomText={"CO2e reductions compared with a business-as-usual scenario"} />
        <StatsDiv headingText={"129.2"} sign={"million tonnes"} bottomText={"servings of affordable nutrition with micronutrient fortification. The figure rises to 211.4 billion servings for our total product portfolio"} />
        <StatsDiv headingText={"30.2%"} sign={""} bottomText={"of our top 200+ senior executive positions are held by women (up from 25.6% in 2020 and achieving our target)"} /> */}
      </div>
      <div style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%",marginRight: (isSmallDevice || isMediumDevice) ? "" : "10%" }}>
        {/* #17668C backgroundColor for card body in dark mode */}
        {/* no border color in dark */}
        <Card style={{ backgroundColor: "#EFEFEF", borderRadius: "1rem", borderColor:"" }}>
          <Card.Img
            style={{
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            variant="top"
            src={cardImage}
          />
          {/* no border,borderRadius,left,right radius in dark mode */}
          <Card.Body style={{ padding: "1rem 1.5rem 2rem 1.5rem",border:"1px solid #D4D4D4",borderBottomLeftRadius: "1rem",
                borderBottomRightRadius: "1rem"}}>
            <Card.Title
              style={{
                fontSize: "1.6875rem",
                fontWeight: "400",
                marginBottom: "16px",
                // #E8E5E2 in dark mode
                color: "#000",
              }}
            >
              {cardHeading}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "1.1rem",
                marginBottom: "24px",
                // #E8E5E2 in dark mode
                color: "grey",
              }}
            >
              {cardText}
            </Card.Text>
            <div className="flex items-center">
              <Button
                variant="primary"
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  // #E8E5E2 in dark mode
                  color: "#fff",
                  // no background color in dark mode
                  backgroundColor: "#CC2439"
                }}
              >
                READ MORE
                {/* Arrow Icon Color #E8E5E2 */}
                <ArrowForwardIcon
                style={{ fontSize: "20px", color: "#fff" }}
              />
              </Button>
              
              
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InfoPage;
