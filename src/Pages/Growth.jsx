import GrowthHero from "../Components/Growth/GrowthHero"
import Growthprogram from "../Components/Growth/Growthprogram"
import Formi from "../Components/Growth/Form"
import ProgramDetails from "../Components/Growth/ProgramDetails"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
// import Started from "../Components/HomeComponents/Started"
import { FaqSection } from "../Components/Growth/FaqSection"
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'

const Growth = () => {
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
      <GrowthHero/>
      <Growthprogram/>
      <ProgramDetails/>
      <Formi/>
      <FaqSection/>
      {/* <Started/> */}
      <Footer p="5rem 9.6rem 0 9.6rem"/>
      </div>}
    </div>
  )
}

export default Growth
