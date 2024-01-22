import React, { useEffect } from 'react'
import {Box, Flex, Heading, Center, Button} from '@chakra-ui/react'
import {PhysicalCard} from './PhysicalCard'
import Enov1 from "../../assets/physical/enovPhysical1.png"
import Enov2 from "../../assets/physical/enovPhysical2.png"
import Enov3 from "../../assets/physical/enovPhysical3.png"
import Enov4 from "../../assets/physical/enovPhysical4.png"
import Enov5 from "../../assets/physical/enovPhysical5.png"
export const PhysicalLocationLayout = () => {
  return (
    <Box>
        <Flex
    columnGap="6.125rem"
    mb={["2.5rem","6.125rem"]}
    flexDir={["column","row"]}
    rowGap="2.5rem"
    className="section-flex"
    width="100%"
    >
    <PhysicalCard bgImage={Enov1}  location={"Online"}
                locationLink={"/programs"} />
    <PhysicalCard bgImage={Enov2}  location={"On-Site"}
                locationLink={"/programs"} />
    </Flex> 
    {/* <Flex mb={["2.5rem","6.125rem"]}>
    <PhysicalCard bgImage={Enov3}  location={"Project Management"}
                locationLink={"/programs"} />
    </Flex> */}
    <Flex
    columnGap="6.125rem"
    mb="1.5rem"
    flexDir={["column","row"]}
    rowGap="2.5rem"
    className="section-flex"
    >
    <PhysicalCard bgImage={Enov4}  location={"Technical Project Management"}
                locationLink={"/programs"} />
    <PhysicalCard bgImage={Enov5}  location={"Growth Product Management"}
                locationLink={"/programs"} />
    </Flex>
    </Box>

  )
}
