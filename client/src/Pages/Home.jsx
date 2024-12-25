import React, { useEffect, useRef } from 'react'
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
import gsap, {Power3} from 'gsap';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },8000)

  const containerRef = useRef()
  useEffect(() => {
    document.body.classList.remove('bodyStiff')
    const container = containerRef.current;
    const numFlakes = 100;
    const createFlake = () => {
      const flake = document.createElement("div");
      const flakeClass = "flake flake" + gsap.utils.random(1, 4, 1);
      flake.setAttribute("class", flakeClass);
      container.appendChild(flake);
      return flake;
    };

    const animateFlake = (flake) => {
      const width = window.innerWidth;
      const height = document.body.scrollHeight;
      const scaleFactor = Power3.easeIn(Math.random());
      let scale = gsap.utils.interpolate(0.3,1,scaleFactor)
      let opacity = gsap.utils.interpolate(0.5,1, scaleFactor)
      const duration = gsap.utils.interpolate(5,(0.03 * height), 1-scaleFactor )

      gsap.set(flake, { y: -200, x: gsap.utils.random(0, width), scale, opacity });
      gsap.to(flake, {
        y: height,
        duration,
        delay : "random(0,4)",
        rotation : "random(-60, 120)",
        ease : 'none',
        x : "+=200",
        onComplete: animateFlake,
        onCompleteParams: [flake],
      });
    };

    // Create and animate flakes
    for (let i = 0; i < numFlakes; i++) {
      const flake = createFlake();
      animateFlake(flake);
    }

    return () => {
      // Cleanup: Remove all flakes on unmount
      const elements = Array.from(document.getElementsByClassName('flake'));
  // Remove each element
      elements.forEach(element => element.remove());
      gsap.killTweensOf("*");
    };
  }, [isLoading]);
  return (<div ref={containerRef}>
  {isLoading ? <LoadingScreen2 /> :<div >
       <Header />
        <Hero />
        <ProductSession /> 
        <motion.div
        initial={{opacity : 0.5, scale : 0.7 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.3}}
        >
          <ProductSection />
        </motion.div>
        <motion.div
        initial={{opacity : 0.5, scale : 0.7 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.3}}
        >
          <EnoverSpecial />
        </motion.div>
        <motion.div
        initial={{opacity : 0.5, scale : 0.7 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.3}}
        >
          <Partners />
        </motion.div>
        <Testimonials />
        <motion.div
        initial={{opacity : 0.5, scale : 0.5 }}
        whileInView={{opacity : 1, scale : 1}}
        transition={{duration : 0.7}}
        >
          <SuccessStories />
        </motion.div>
        <Alumni />
        <Started />
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>}
  </div>)
}

export default Home
