import React from 'react'
import ImageDiv from './ImageDiv'
import TextPage from './TextPage'
import NewClimateCard from './NewClimateCard'
import Contributions from './Contributions'
import InfoPage from './InfoPage'
import { Typography } from '@mui/material'
import Works from './Works'
const ClimateAction = () => {
  return (
    <>
        <ImageDiv image='/climateAction.jpg' />
        <TextPage heading={"The challenge posed by climate change is serious and growing. Nestlé is working hard to reduce its carbon footprint and achieve net zero by 2050 at the latest."} bottomText={"We take a holistic approach to managing our impact on the environment – joining the dots between climate change and related issues including water stewardship, biodiversity and human rights."}/>
        <NewClimateCard />
        <div className='mb-8'>
        <Contributions className />
        </div>
        <hr className='mx-auto' style={{width:"80%",color:"#CC0000"}} />
        <Typography style={{marginLeft:"10%",marginRight:"10%",fontSize:"1.55em",fontWeight:"200",marginTop:"4rem"}}>Our progress toward net zero emmissions</Typography>
        <InfoPage cardHeading={"Regenerative Agriculture"} cardText={"Our agriculture supply chain is where we have the greatest opportunity to reduce emissions. That's why transitioning to regenerative agriculture practices is so important."} cardImage={"/regenagCard.jpg"} infoCards={[["6.4","million tonnes","greenhouse gas emissions CO2e reductions compared with a business-as-usual scenario.We aim to reduce absolute emissions by 20% by 2025, and by 50% by 2030."],["78.4%","","renewable electricity sourced in 2022.By 2025, we aim to source 100% renewable electricity across our sites globally."],["99.1%","","deforestation-free in our primary meat, palm oil, pulp and paper, soya and sugar supply chains in 2022.We remain focused on achieving and maintaining deforestation-free primary supply chains for meat, palm oil, pulp and paper, soya and sugar, and aim to do so by 2025 for coffee and cocoa."],["12.4","million","trees secured for planting in 2022"]]} />
        <Works pageHeading={"Climate action"} cardHeadings={{
    "Climate action in our operations": [
      "/climateactionoperationsCard.jpg",
      "",
      ""
    ],
    "Climate action in our brands": [
        "/climatebrandsCard.jpg","",""
    ],
    "Teaming up for climate advocacy": [
        "/climateadvocacyCard.jpg","",""
    ]
  }} />
    </>
  )
}

export default ClimateAction