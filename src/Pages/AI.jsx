import AiHero from "../Components/AI/AiHero"
import Aiprogram from "../Components/AI/Aiprogram"
import Benefits from "../Components/AI/Benefits"
import Formi from "../Components/AI/Form"
import ProgramDetails from "../Components/AI/ProgramDetails"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Started from "../Components/HomeComponents/Started"
import { FaqSection } from "../Components/AI/FaqSection"
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'

const AI = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <div>
      {loading ? <LoadingScreen2/> : 
      <div>
        <Header/>
      <AiHero/>
      <Aiprogram/>
      <ProgramDetails/>
      <Formi/>
      <Benefits/>
      <FaqSection/>
      <Started/>
      <Footer p="5rem 9.6rem 0 9.6rem"/>
      </div>}
    </div>
  )
}

export default AI
