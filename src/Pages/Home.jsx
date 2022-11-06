import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import About from '../Components/HomeComponents/About'
import Training from '../Components/HomeComponents/Training'
import Why from '../Components/HomeComponents/Why'
import Testimonials from '../Components/HomeComponents/Testimonials'
import Sessions from '../Components/HomeComponents/Sessions'
import Started from '../Components/HomeComponents/Started'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { theme } from '../Utils/Theme'
const Home = () => {
  return (
    <div
    style={{
      backgroundColor: "#FFFFFF"
    }}
    >
       <Header bgColor="#FFFFFF" bgColorMobile="#F5FCFF"/>
        <Hero/>
        <About/>
        <Training/>
        <Why/>
        <Testimonials/>
        <Sessions/>
        {/* <Started/>
        <Footer/> */}
    </div>
  )
}

export default Home