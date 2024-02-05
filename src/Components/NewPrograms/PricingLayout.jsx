import React from 'react'
import {AdvancedCard, OnsiteCard} from './ProgramCards'
import { SimpleGrid, Heading, Box } from '@chakra-ui/react'
export const PricingLayout = () => {
  return (
    <Box  p={["3% 5%","3% 10%"]}   backgroundColor={"#F4FCFE"}>
      <Heading fontSize={["28px","36px"]} py="3rem" fontWeight="500" color="#000" textAlign="center" >
      Our Product Management Programs
      </Heading>
    <SimpleGrid spacing={"66px"} columns={[1,2]}>
        <AdvancedCard/>
        <OnsiteCard/>
    </SimpleGrid>
    </Box>
  )
}
