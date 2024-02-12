import { Button } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div className='mt-16 mb-12' style={{marginLeft:"10%",marginRight:"10%",backgroundColor:"#16696F",borderRadius:"1rem"}} >
        <div className='flex justify-around' style={{padding:"1.5rem 5% 0rem 5%",alignItems:"flex-start"}}>
            <img src='/addimage.jpg' alt='img' style={{width:"200px",height:"112px"}} />
            <div className='text-center' style={{fontSize:"2rem",fontWeight:"200",lineHeight:"1.25",color:"#D1CBC5"}}>Creating Shared Value <br />and Sustainability Report</div>
            <Button style={{border:"1px solid #D1CBC5",color:"#D1CBC5"}}>Download <br /> the pdf <br />(15MB)</Button>
        </div>
    </div>
  )
}

export default Add