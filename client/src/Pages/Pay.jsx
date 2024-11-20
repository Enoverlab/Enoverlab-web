import React from 'react'
// import styled from 'styled-components'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import PayHero from '../Components/Pay/PayHero'

const Pay = () => {
  return (
    <>
        <Header bgColor="#FFFFFF" bgColorMobile="#F5FCFF"/>
        <PayHero/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </>
  )
}

export default Pay

