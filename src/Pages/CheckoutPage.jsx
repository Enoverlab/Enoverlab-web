import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Checkout from '../Components/Pay/Checkout'

const CheckoutPage = () => {
  return (
    <div>
        <Header  bgColor="#FFFDF7"  bgColorMobile="#FFFDF7"/>
            <Checkout/>
        <Footer/>
    </div>
  )
}

export default CheckoutPage