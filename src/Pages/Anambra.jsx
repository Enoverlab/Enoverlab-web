import AnambraHero from '../Components/Anambra/AnambraHero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Access from '../Components/Anambra/Access'
import ProgramDetails from '../Components/Anambra/ProgramDetails'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import {FaqSection} from "../Components/Pricing/FaqSection"
import Formi from '../Components/Anambra/Form'
import { useState, useEffect } from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'
import Testimonials from '../Components/HomeComponents/Testimonials'
import Guarantee from '../Components/Pricing/Guarantee'
import Companies from '../Components/Pricing/Companies'

const Anambra = () => {
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
        <AnambraHero/>
        <Access/>
        <ProgramDetails/>
        <Guarantee/>
        <Companies/>
        <Testimonials/>
        <div>
        <SuccessStories/>
        </div>
        <Formi/>
        <FaqSection/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
        </div>}
    </div>
  )
}

export default Anambra
