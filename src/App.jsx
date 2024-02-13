import './App.css'
import Navbar from './components/Navbar'
import ImageDiv from './components/ImageDiv'
import TextPage from './components/TextPage'
import InfoPage from './components/InfoPage'
import Works from './components/Works'
import Add from './components/Add'
import BottomNav from './components/BottomNav'
import UsefulLinks from './components/UsefulLinks'
import Accord from './components/Accord'
import Follow from './components/Follow'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <ImageDiv />
      <TextPage />
      <hr className='mx-auto' style={{width:"80%",color:"#CFC8BD"}} />
      <InfoPage />
      <hr className='mx-auto' style={{width:"80%",color:"#CFC8BD"}} />
      {/* done */}
      <Works />
      <Add />
      <BottomNav />
      <UsefulLinks />
      <Accord />
      <Follow />
      <Footer />
    </>
  )
}

export default App
