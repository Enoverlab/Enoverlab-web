import React from 'react'
import {Box, Accordion, Heading, Center} from '@chakra-ui/react'
import {FaqContent} from './FaqContent'
import {FaqAccordion} from './FaqContainer'
export const FaqSection = () => {
  return (
    <Box
    padding={["3% 5%","3% 20%"]}
    backgroundColor="#F4FCFE"
    >
        <Center>
        <Heading fontSize={["20px","28px"]} textAlign="center" fontWeight="500" mb="32px" width={["100%","50%"]}>
       Get quick answers to questions asked by people like you
        </Heading>
        </Center>
        <Box
        background="brand.white"
        p="2.rem 1.5rem"
        >  
        <Accordion defaultIndex={[0]} allowToggle border="0px solid #FFFF">
            {
                FaqContent.map(({questionTitle, questionAnswer}) => (
                    <FaqAccordion questionTitle={questionTitle} questionAnswer={questionAnswer}/>
                ))
            }
      </Accordion>
        </Box>
    </Box>
  )
}
