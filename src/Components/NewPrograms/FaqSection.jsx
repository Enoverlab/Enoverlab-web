import React from 'react'
import {Box, Accordion} from '@chakra-ui/react'
import {FaqContent} from './FaqContent'
import {FaqAccordion} from './FaqContainer'
export const FaqSection = () => {
  return (
    <Box
    padding={["3% 5%","3% 20%"]}
    backgroundColor="#F4FCFE"
    >
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
