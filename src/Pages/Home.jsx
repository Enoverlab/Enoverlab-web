import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import Testimonials from '../Components/HomeComponents/Testimonials'
import Started from '../Components/HomeComponents/Started'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import ProductSession2 from '../Components/HomeComponents/ProductSession2'
import ProductSection from '../Components/HomeComponents/ProductSection'
import EnoverSpecial from '../Components/HomeComponents/EnoverSpecial'
import SuccessStories from '../Components/HomeComponents/SuccessStories'
import Partners from '../Components/HomeComponents/Partners'
import Alumni from '../Components/HomeComponents/Alumni'
import { useState } from 'react'
import LoadingScreen2 from '../Components/LoadingScreen2'
import {motion} from "framer-motion"
import ProductSession from '../Components/HomeComponents/ProductSession'
// import styled from 'styled-components'
// import { theme } from '../Utils/Theme'
const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },3500)
  return (<>
  {isLoading ? <LoadingScreen2 /> : <div>
       <Header />
        <Hero />
        <ProductSession />
        <motion.div
        initial={{opacity : 0.5, scale : 0.5 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.5, staggerChildren : 0.3}}
        >
          <ProductSection />
        </motion.div>
        <motion.div
        initial={{opacity : 0.5, scale : 0.5 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.5, staggerChildren : 0.3}}
        >
          <EnoverSpecial />
        </motion.div>
        <motion.div
        initial={{opacity : 0.5, scale : 0.5 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.5, staggerChildren : 0.3}}
        >
          <Partners />
        </motion.div>
        <Testimonials />
        <motion.div
        initial={{opacity : 0.5, scale : 0.5 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.7, staggerChildren : 0.3}}
        >
          <SuccessStories />
        </motion.div>
        <Alumni />
        <Started />
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>}
  </>)
}

export default Home
