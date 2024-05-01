import AiHero from "../Components/AI/AiHero"
import Aiprogram from "../Components/AI/Aiprogram"
import Benefits from "../Components/AI/Benefits"
import Formi from "../Components/AI/Form"
import ProgramDetails from "../Components/AI/ProgramDetails"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Started from "../Components/HomeComponents/Started"
import { FaqSection } from "../Components/Pricing/FaqSection"

const AI = () => {
  return (
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
    </div>
  )
}

export default AI
