import React from 'react'
import {Box} from '@chakra-ui/react'
import {PhysicalLocationLayout} from '../Components/Physical/PhysicalLocationLayout'
import {Hero} from '../Components/Physical/Hero'


const Physical = () => {
  return (
    <Box px="5%">
        <Hero/>
        <PhysicalLocationLayout/>
    </Box>
  )
}

export default Physical