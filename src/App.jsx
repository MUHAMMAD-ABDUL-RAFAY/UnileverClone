import './App.css'
import Navbar from './components/Navbar'
import ImageDiv from './components/ImageDiv'
import TextPage from './components/TextPage'
import InfoPage from './components/InfoPage'

function App() {
  return (
    <>
      <Navbar />
      <ImageDiv />
      <TextPage />
      <hr className='mx-auto' style={{width:"80%",color:"#CFC8BD"}} />
      <InfoPage />
    </>
  )
}

export default App
