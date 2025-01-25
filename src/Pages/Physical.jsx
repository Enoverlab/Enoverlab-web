import React from 'react'
import {Box} from '@chakra-ui/react'
import {PhysicalLocationLayout} from '../Components/Physical/PhysicalLocationLayout'
import {Hero} from '../Components/Physical/Hero'
import SuccessStories from '../Components/Pricing/SuccessStories'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Physical = () => {
  return (
    <>
    <Header bgColor="#F8FAFF"  bgColorMobile="#FFFDF7"/>
    <Box px="5%" backgroundColor="#F8FAFF">
        <Hero/>
        <PhysicalLocationLayout/>
        <SuccessStories bgColor="#F8FAFF"/>
    </Box>
    <Footer/>
    </>
  )
}

export default Physical