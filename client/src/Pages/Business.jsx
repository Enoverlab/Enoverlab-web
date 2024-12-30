import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Access from '../Components/Business/Access'
import ProgramDetails from '../Components/Business/ProgramDetails'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import { FaqSection } from "../Components/Pricing/FaqSection"
import { H2 } from '../Utils/styled/Typograpyhy'
import Formi from '../Components/AI/Form'
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'
import BusinessHero from '../Components/Business/BusinessHero'

const Business = () => {
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
        <BusinessHero/>
        <Access/>
        <ProgramDetails/>
        <Formi/>
        <div>
        <H2 mt="4rem" tA="center" color='var(--TItle-Text)'>What Our Alumni Say</H2>
        <SuccessStories/>
        </div>
        <FaqSection/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
        </div>}
    </div>
  )
}

export default Business
