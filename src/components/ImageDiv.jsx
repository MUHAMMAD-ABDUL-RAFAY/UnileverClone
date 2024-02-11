import { Typography } from '@mui/material'
import React from 'react'

const ImageDiv = () => {
  return (
    // <div className = "relative mt-4">
    //     <div className = "w-full h-full">
    //       <img src = '/familyImage.jpg' alt = "FamilyPic" />
    //     </div>
    //       {/* <div class='absolute' style={{right:'50%', left:"50%", bottom:"15%"}}> */}
    //     <span className='absolute' style={{ fontFamily:'cursive', fontSize:"4rem", top:"50%",left:"50%",bottom:"50%",transform:"translate(-50%,-50%)",color:"#E5E0D8"}}>Sustainabilty at <br /> <span>Nestle</span></span>
    //       {/* </div> */}
    //   </div>
    <div className='relative mt-4'>
        <img src="familyImage.jpg" alt="Your image" style={{
            boxShadow: 'inset 0 0 10px 5px rgba(0, 0, 0, 0.5)'}} />
        <p className="absolute" style={{top:"50%",left:"50%",transform:"translate(-50%,-50%)",color:"#E5E0D8",fontSize:"4rem"}}>Sustainability at Nestle</p>
    </div>
// .image-text {
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5); // Optional background for text contrast
//   color: white;
//   padding: 10px;
//   font-size: 20px;
// }
  )
}

export default ImageDiv