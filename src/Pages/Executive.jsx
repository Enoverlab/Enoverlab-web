import KenyanHero from '../Components/Executive/ExecutiveHero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { ClassTools } from '../Components/Pricing/ClassTools'
import Access from '../Components/Executive/Access'
import ProgramDetails from '../Components/Executive/ProgramDetails'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import { FaqSection } from "../Components/Pricing/FaqSection"
import { H2 } from '../Utils/styled/Typograpyhy'
import Formi from '../Components/AI/Form'
import {useState, useEffect} from "react"
import LoadingScreen2 from '../Components/LoadingScreen2'

const Executive = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    document.body.classList.remove('bodyStiff')
  },[loading])
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
        <KenyanHero/>
        <Access/>
        <ProgramDetails/>
        <ClassTools/>
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

export default Executive
