import React from 'react'
import {Box, Heading, Text, Icon, Flex} from '@chakra-ui/react'
import {AiOutlineArrowRight} from 'react-icons/ai'
// import {Link} from 'react-router-dom'
// import Marquee from 'react-fast-marquee'
import Enov1 from "../../assets/physical/enovPhysical1.png"

export const PhysicalCard = ({bgImage, location, locationLink, heightValue, fontSizeProp, isComing}) => {
  return (
    <Box
    background={`url(${bgImage}) no-repeat center center`}
    // background={`url(${bgImage}) no-repeat center center`}
    backgroundSize="cover"
    borderRadius=".625rem"
    position="relative"
    backgroundColor= "black"
    minHeight={heightValue ? heightValue : ["21.875rem","31.5625rem"]}
    // href={locationLink }
    width={"100%"}
    >    
     <Box  p={["0 0 2.125rem 1.625rem","0 0 2.5rem 2.9375rem"]} position="absolute" bottom={"0"} left="0" >
      <Heading
      color="#FFF"
      fontSize={["24px","2.8125rem"]}
      fontWeight="800"
      >
      {location}
      </Heading>
      {
      !isComing &&  
      <Flex
      alignItems="center"

      >
      <Text
       color="#FFFFFF"
       fontSize={["1.25rem","1.25rem"]}
       fontWeight="400"
    //    as={'a'}
    //    href={locationLink}
       _hover={{
        color: "#FCD900"
      }}

      display="flex"
      alignItems="center"
      >
      Enrol Now
      <Icon  _hover={{
        color: "#FCD900"
      }} as={AiOutlineArrowRight} color="#FFFFFF" fontSize="1.25rem" ml="1.25rem" />
      </Text>
      
      </Flex>
      }
     </Box>
     
    </Box>
  )
}
