import React from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'
export const TermsHero = () => {
  return (
    <Box
    height="80vh"
    width="100%"
    margin={"0 auto"}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems={["flex-start","center"]}
    background="rgba(0, 0, 255, 0.04)"
    px="5%"
    >
        <Heading
        fontSize="50px"
        lineHeight="3.75rem"
        color="#0046FF"
        >
        Terms And Conditions
        </Heading>
        <Text
        mt="3.125rem"
        color="#0046FF"
        >
        Kindly read these terms and conditions carefully before using the service
        </Text>
    </Box>
  )
}
