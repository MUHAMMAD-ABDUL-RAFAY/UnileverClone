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
    // color is #CFC8BD in dark mode whole file
    <div className='mt-8 mb-16'>
        { isSmallDevice || isMediumDevice ? "" : <div className='flex flex-col mb-4' style={{width:'90%',justifyContent:"flex-end"}}>
            <div className='flex flex-col' style={{alignSelf:"flex-end",color:"#000"}}>
                Share this page
                <div className='flex flex-row gap-x-2 mt-2'>
                    {/* all background color #145170 */}
                    <div className='flex items-center justify-center' style={{backgroundColor:"#CC2439",width:'40px',height:'40px',borderRadius:"50%"}}>
                        {/* no color in icon in dark mode */}
                        <MailIcon style={{color:"#fff"}} />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#CC2439",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <FacebookIcon style={{color:"#fff"}} />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#CC2439",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <MailIcon style={{color:"#fff"}} />
                    </div>
                    <div className='flex items-center justify-center' style={{backgroundColor:"#CC2439",width:'40px',height:'40px',borderRadius:"50%"}}>
                        <MailIcon style={{color:"#fff"}} />
                    </div>
                </div>
            </div>
        </div>}
        <div className='flex flex-col' style={{width: isSmallDevice || isMediumDevice ? "80%" :"60%",justifyContent:"flex-start",marginLeft:"10%"}}>
            <Typography style={{fontSize:"25px",color:"#000"}}>We believe in the power of food to enhance quality of life.</Typography>
            <br />
            <br />
            <Typography style={{color:"grey"}}>This belief fuels our desire to use our global scale, resources and expertise to contribute to a healthier and sustainable future for people and the planet.</Typography>
            <br />
            <Typography style={{color:"grey"}}>Creating Shared Value (CSV) is at the heart of our purpose: to unlock the power of food to enhance quality of life for everyone, today and for generations to come. We have sought to build our business by taking decisions that are not just good for us and our shareholders, but for society and the planet as well.</Typography>
            <br />
            <Typography style={{color:"grey"}}>Our work is guided by a desire to contribute to nutritious and sustainable diets, to help protect, renew and restore natural resources, to help strengthen communities and to operate responsibly.</Typography>
            <br />
            <Typography style={{color:"grey"}}>Our approach to sustainability is wide-ranging, underpinned by commitments to strive for net-zero emissions and deforestation-free supply chains and to advance regenerative agriculture at scale. Alongside, we are committed to improving water stewardship, developing better packaging with improved circularity, creating opportunities for young people and building a diverse and inclusive workforce.</Typography>
        </div>
    </div>
  )
}

export default TextPage