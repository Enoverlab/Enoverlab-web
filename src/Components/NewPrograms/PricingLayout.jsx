import React from 'react'
import {AdvancedCard, OnsiteCard} from './ProgramCards'
import { SimpleGrid } from '@chakra-ui/react'
export const PricingLayout = () => {
  return (
    <SimpleGrid spacing={"66px"} columns={[1,2]} p={["3% 5%","3% 10%"]} backgroundColor={"#F4FCFE"}>
        <AdvancedCard/>
        <OnsiteCard/>
    </SimpleGrid>
  )
}
