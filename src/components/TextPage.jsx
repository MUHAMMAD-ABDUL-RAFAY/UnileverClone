import React,{useEffect} from 'react'
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';
const TextPage = () => {
    const isSmallDevice = window.innerWidth < 480;
    const isMediumDevice = window.innerWidth >= 480 && window.innerWidth < 768;
    useEffect(() => {
        console.log(isSmallDevice,isMediumDevice)
    },[isSmallDevice,isMediumDevice])
    return (

    <div className='mt-8 mb-16'>
        { isSmallDevice || isMediumDevice ? "" : <div className='flex flex-col mb-4' style={{width:'90%',justifyContent:"flex-end"}}>
            <div className='flex flex-col' style={{alignSelf:"flex-end",color:"#CFC8BD"}}>
                Share this page
                <div className='flex flex-row gap-x-2 mt-2'>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#145170",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <MailIcon />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#145170",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <FacebookIcon />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#145170",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <MailIcon />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#14565B",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <MailIcon />
                    </div>
                </div>
            </div>
        </div>}
        <div className='flex flex-col' style={{width: isSmallDevice || isMediumDevice ? "80%" :"60%",justifyContent:"flex-start",marginLeft:"10%"}}>
            <Typography style={{fontSize:"25px",color:"#CFC8BD"}}>We believe in the power of food to enhance quality of life.</Typography>
            <br />
            <br />
            <Typography style={{color:"#CFC8BD"}}>This belief fuels our desire to use our global scale, resources and expertise to contribute to a healthier and sustainable future for people and the planet.</Typography>
            <br />
            <Typography style={{color:"#CFC8BD"}}>Creating Shared Value (CSV) is at the heart of our purpose: to unlock the power of food to enhance quality of life for everyone, today and for generations to come. We have sought to build our business by taking decisions that are not just good for us and our shareholders, but for society and the planet as well.</Typography>
            <br />
            <Typography style={{color:"#CFC8BD"}}>Our work is guided by a desire to contribute to nutritious and sustainable diets, to help protect, renew and restore natural resources, to help strengthen communities and to operate responsibly.</Typography>
            <br />
            <Typography style={{color:"#CFC8BD"}}>Our approach to sustainability is wide-ranging, underpinned by commitments to strive for net-zero emissions and deforestation-free supply chains and to advance regenerative agriculture at scale. Alongside, we are committed to improving water stewardship, developing better packaging with improved circularity, creating opportunities for young people and building a diverse and inclusive workforce.</Typography>
        </div>
    </div>
  )
}

export default TextPage