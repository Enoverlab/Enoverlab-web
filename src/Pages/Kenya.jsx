import KenyanHero from '../Components/Kenya/KenyanHero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { ClassTools } from '../Components/Pricing/ClassTools'
import Access from '../Components/Kenya/Access'
import ProgramDetails from '../Components/Kenya/ProgramDetails'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import { FaqSection } from "../Components/Pricing/FaqSection"
import { H2 } from '../Utils/styled/Typograpyhy'
import Formi from '../Components/Kenya/Form'

const Kenya = () => {
  return (
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
        <Footer/>
    </div>
  )
}

export default Kenya
