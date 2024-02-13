import './App.css'
import Navbar from './components/Navbar'
import ImageDiv from './components/ImageDiv'
import TextPage from './components/TextPage'
import InfoPage from './components/InfoPage'
import Works from './components/Works'
// import Add from './components/Add'
// import BottomNav from './components/BottomNav'
// import UsefulLinks from './components/UsefulLinks'
// import Accord from './components/Accord'
// import Follow from './components/Follow'
// import Footer from './components/Footer'
import Layout from './components/Layout'
import ClimateAction from './components/ClimateAction'
// import { useNavigate } from 'react-router-dom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
function App() {  
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Layout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/climateaction' element={<ClimateAction  />} />
            {/* <Route path='/' element={<ImageDiv image={"/mainpagePic.jpg"} />} />
            <Route path="/climateaction" element={<ImageDiv image={"/climateAction.jpg"} />} />
            <Route path="/wastereduction" element={<ImageDiv image={"/wasteCardwithBg.png"} />} />
            <Route path="/nature" element={<ImageDiv image={"/natureCard.jpg"} />} />
            <Route path="/watercanal" element={<ImageDiv image={"/watercanalCard.jpg"} />} />
            <Route path="/humanrights" element={<ImageDiv image={"/humanrightsCard.jpg"} />} />
            <Route path="/rawmaterials" element={<ImageDiv image={"/rawmaterialsCard.jpg"} />} />
            <Route path="/community" element={<ImageDiv image={"/communityCard.jpg"} />} />
            <Route path="/businessforestroad" element={<ImageDiv image={"/businessforestroadCard.jpg"} />} />
            <Route path="/reportingcenterfarm" element={<ImageDiv image={"/reportingcenterfarmCard.jpg"} />} /> */}
            {/* <Route path='/' element={<TextPage heading={"We believe in the power of food to enhance quality of life."} bottomText={"This belief fuels our desire to use our global scale, resources and expertise to contribute to a healthier and sustainable future for people and the planet.Creating Shared Value (CSV) is at the heart of our purpose: to unlock the power of food to enhance quality of life for everyone, today and for generations to come. We have sought to build our business by taking decisions that are not just good for us and our shareholders, but for society and the planet as well.Our work is guided by a desire to contribute to nutritious and sustainable diets, to help protect, renew and restore natural resources, to help strengthen communities and to operate responsibly.Our approach to sustainability is wide-ranging, underpinned by commitments to strive for net-zero emissions and deforestation-free supply chains and to advance regenerative agriculture at scale. Alongside, we are committed to improving water stewardship, developing better packaging with improved circularity, creating opportunities for young people and building a diverse and inclusive workforce."} />} />
            <Route path="/climateaction" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/wastereduction" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/nature" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/watercanal" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/humanrights" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/rawmaterials" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/community" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/businessforestroad" element={<TextPage heading={""} bottomText={""} />} />
            <Route path="/reportingcenterfarm" element={<TextPage heading={"Transparent, public reporting on our activities, commitments and performance is embedded in how we do business at Nestlé."} bottomText={"We include a summary of our approach and performance on important topics in our annual review and publish more details in our Creating Shared Value and Sustainability Report and our Climate Risk and Impact Report."} />} /> */}

            
            
            
            
            
            
            
          {/* <Route index element={<Username />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="password" element={<Password />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="recovery" element={<Recovery />} /> */}
          {/* <Route path="reset" element={<Reset />} /> */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="livevideo" element={<LiveVideo />} /> */}
          {/* <Route path="analyzevideo" element={<AnalyzeVideo />} /> */}
          {/* <Route path="*" element={<PageNotFound />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ImageDiv /> */}
      {/* <TextPage /> */}
      {/* color #CFC8BD */}
      {/* <hr className='mx-auto' style={{width:"80%",color:"#CC0000"}} /> */}
      {/* <InfoPage /> */}
      {/* color #CFC8BD */}
      {/* <hr className='mx-auto' style={{width:"80%",color:"#CC0000"}} /> */}
      {/* done */}
      {/* <Works /> */}
      {/* <Add /> */}
      {/* <BottomNav /> */}
      {/* <UsefulLinks /> */}
      {/* <Accord /> */}
      {/* <Follow /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
