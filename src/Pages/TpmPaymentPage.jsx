import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TpmPayment from '../Components/Payment/TpmPayment'

const TpmPaymentPage = () => {
  return (
    <div>
      <Header />
      <TpmPayment/>
      <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>
  )
}

export default TpmPaymentPage
