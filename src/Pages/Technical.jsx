import TechnicalHero from "../Components/Technical/TechnicalHero"
import Technicalprogram from "../Components/Technical/Technicalprogram"
import Formi from "../Components/Growth/Form"
import ProgramDetails from "../Components/Technical/ProgramDetails"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
// import Started from "../Components/HomeComponents/Started"
// import { FaqSection } from "../Components/Growth/FaqSection"
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'

const Technical = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  useEffect(()=>{
    document.body.classList.remove('bodyStiff')
  },[loading])
  return (
    <div>
      {loading ? <LoadingScreen2/> : 
      <div>
        <Header/>
      <TechnicalHero/>
      <Technicalprogram/>
      <ProgramDetails/>
      <Formi/>
      {/* <FaqSection/> */}
      {/* <Started/> */}
      <Footer p="5rem 9.6rem 0 9.6rem"/>
      </div>}
    </div>
  )
}

export default Technical
