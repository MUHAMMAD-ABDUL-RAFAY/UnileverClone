import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Typography } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const PagesNav = () => {
  const rightSidePages = ["About us","Our stories","Brands","Sustainability","Nutrition","Ask Colgate"]
  const leftSidePages = ["Careers","Investors","Media"]
  const ExtraText = {"/":"Sustainablity at Colgate","/climateaction":"Climate action","/wastereduction":"Waste reduction","/nature":"Protecting nature","/watercanal":"Water stewardship","/humanrights":"Human rights","/rawmaterials":"Sustainably sourced raw materials","/community":"Caring about our people and communinities","/businessforestroad":"Ethical and responsible business practices","/reportingcenterfarm":"Performance and reporting"}
    return (
    <>
        {/* backgroundColor: 343331 for dark mode */}
        <div className='mt-8 flex p-3 place-content-evenly' style={{backgroundColor:"#CC0000"}}>
            <div className='flex gap-x-4 items-center'>
                {/* color #CFC8BD in dark mode */}
                <HomeOutlinedIcon className='mr-4' style={{color:"#fff"}} sx={{fontSize:30}} />
                {
                    rightSidePages.map((page,index) => (
                        // #CFC8BD in dark mode
                    <a key={index} style={{color:"#fff",cursor:"pointer"}} >{page}</a>
                    ))
                }
            </div>
            <div className='flex gap-x-4 items-center'>
                {leftSidePages.map((page,index) => (
                    // #CFC8BD in dark mode
                    <a key={index} className='font-bold' style={{color:"#fff",cursor:"pointer" }} >{page}</a>
                ))}
            </div>
        </div>
        <div className='flex mt-4' style={{marginLeft:"3%"}}>
            {/* color #CFC8BD */}
            <Typography style={{fontSize:'0.8rem',color:"#000"}}>Home</Typography>
            <ChevronRightOutlinedIcon sx={{fontSize:20}} />
            <Typography style={{fontSize:'0.8rem',color:"#000",textDecoration:'underline',textDecorationColor:"#CC0000"}}>Sustainability at Colgate</Typography>
            {
                window.location.pathname === "/" ? "" :
                <>
                <ChevronRightOutlinedIcon sx={{fontSize:20}} />
                <Typography style={{fontSize:'0.8rem',color:"#000",textDecoration:'underline',textDecorationColor:"#CC0000"}}>{ExtraText[window.location.pathname]}</Typography>
                </>
            }
        </div>
    </>
  )
}

export default PagesNav