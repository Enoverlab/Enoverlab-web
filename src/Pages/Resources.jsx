import React from 'react'
import Header from '../Components/Header'
import Ebooks from '../Components/Resources/Ebooks'
import ResourceHero from '../Components/Resources/ResourceHero'

const Resources = () => {
  return (
    <div>
        <Header bgColor=" #FFFDF7" bgColorMobile="#FFFDF7"/>
        <ResourceHero/>
        <Ebooks/>
    </div>
  )
}

export default Resources