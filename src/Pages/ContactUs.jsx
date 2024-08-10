import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ContactHero from '../Components/contactus/ContactHero'
import Visit from '../Components/contactus/Visit'
import {motion} from "framer-motion"

const ContactUs = () => {
  return (
    <div>
      <Header/>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      >
       <ContactHero/>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{opacity : 1, scale: 1}}
      transition={{ duration: 0.5 }}
      >
      <Visit/>
      </motion.div>
      <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>
  )
}

export default ContactUs
