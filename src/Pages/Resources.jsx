import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Started from '../Components/HomeComponents/Started'
// import Training from '../Components/HomeComponents/Training'
import Ebooks from '../Components/Resources/Ebooks'
import Events from '../Components/Resources/Events'
import ResourceHero from '../Components/Resources/ResourceHero'

const Resources = () => {
  return (
    <div>
        <Header bgColor=" #FFFDF7" bgColorMobile="#FFFDF7"/>
        <ResourceHero/>
        <Ebooks/>
        <Events/>
        {/* <Training/> */}
        <Started/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>
  )
}

export default Resources