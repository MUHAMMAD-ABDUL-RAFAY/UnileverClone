import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Typography } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const PagesNav = () => {
  const rightSidePages = ["About us","Our stories","Brands","Sustainability","Nutrition","Ask Colgate"]
  const leftSidePages = ["Careers","Investors","Media"]

    return (
    <>
        <div className='mt-8 flex p-3 place-content-evenly' style={{backgroundColor:"#343331"}}>
            <div className='flex gap-x-4 items-center'>
                <HomeOutlinedIcon className='mr-4' style={{color:"#CFC8BD"}} sx={{fontSize:30}} />
                {
                    rightSidePages.map((page,index) => (
                    <a key={index} style={{color:"#CFC8BD",cursor:"pointer"}} >{page}</a>
                    ))
                }
            </div>
            <div className='flex gap-x-4 items-center'>
                {leftSidePages.map((page,index) => (
                    <a key={index} className='font-bold' style={{color:"#CFC8BD",cursor:"pointer" }} >{page}</a>
                ))}
            </div>
        </div>
        <div className='flex mt-4' style={{marginLeft:"3%"}}>
            <Typography style={{fontSize:'0.8rem',color:"#CFC8BD"}}>Home</Typography>
            <ChevronRightOutlinedIcon sx={{fontSize:20}} />
            <Typography style={{fontSize:'0.8rem',color:"#CFC8BD",textDecoration:'underline',textDecorationColor:"#00807A"}}>Sustainability at Colgate</Typography>
        </div>
    </>
  )
}

export default PagesNav