import PMPHero from '../Components/PMP/PMPHero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { ClassTools } from '../Components/Pricing/ClassTools'
import Access from '../Components/PMP/Access'
import ProgramDetails from '../Components/PMP/ProgramDetails'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import { FaqSection } from "../Components/Pricing/FaqSection"
import { H2 } from '../Utils/styled/Typograpyhy'
import Formi from '../Components/Kenya/Form'
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'
import Guarantee from '../Components/Pricing/Guarantee'
import Companies from '../Components/Pricing/Companies'

const PMP = () => {
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
        <PMPHero/>
        <Access/>
        <ProgramDetails/>
        {/* <Guarantee/> */}
        <Companies/>
        {/* <ClassTools/>
        <div>
        <H2 mt="4rem" tA="center" color='var(--TItle-Text)'>What Our Alumni Say</H2>
        <SuccessStories/>
        </div>
        <Formi/> */}
        <FaqSection/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
        </div>}
    </div>
  )
}

export default PMP
