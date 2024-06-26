import { Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
// border-top-color: #2C809A
//body-color: #292A2B
// text-color: #A9A093
const StatsDiv = ({headingText,sign,bottomText}) => {
    const [containperc,setContainPerc] = useState(false)
    useEffect(() => {
        if(sign === "%"){
            setContainPerc(true)
        }
    }, [])

    // console.log(headingText,sign,bottomText)
  return (
    // #292A2B backgroundColor #a9a093 color bordertopColor #2c809a in dark mode
    <div style={{borderTop:"2px solid #CC2439",color:"#000",backgroundColor:"#EFEFEF",minHeight:"152px",padding:"10px"}}>
        <Typography><span style={{fontSize:'60px',fontWeight:"700"}}>{headingText}</span> {containperc ? '' : <span style={{fontSize:"14px",fontWeight:"700"}} >{sign}</span>}</Typography>
        <Typography style={{color:"grey"}}>{bottomText}</Typography>
    </div>
  )
}

export default StatsDiv