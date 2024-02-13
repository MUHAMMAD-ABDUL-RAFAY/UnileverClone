import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StatsDiv from "./StatsDiv";
const InfoPage = () => {
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
        <StatsDiv headingText={"6.4"} sign={"million tonnes"} bottomText={"CO2e reductions compared with a business-as-usual scenario"} />
        <StatsDiv headingText={"129.2"} sign={"million tonnes"} bottomText={"servings of affordable nutrition with micronutrient fortification. The figure rises to 211.4 billion servings for our total product portfolio"} />
        <StatsDiv headingText={"30.2%"} sign={""} bottomText={"of our top 200+ senior executive positions are held by women (up from 25.6% in 2020 and achieving our target)"} />
      </div>
      <div style={{ width: (isSmallDevice || isMediumDevice) ? "85%" : "50%",marginRight: (isSmallDevice || isMediumDevice) ? "" : "10%" }}>
        {/* #17668C backgroundColor for card body in dark mode */}
        <Card style={{ backgroundColor: "#EFEFEF", borderRadius: "1rem" }}>
          <Card.Img
            style={{
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            variant="top"
            src="/cardImage.jpg"
          />
          
          <Card.Body style={{ padding: "1rem 1.5rem 2rem 1.5rem"}}>
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
