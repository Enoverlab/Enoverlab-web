import React from "react";
import {
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Text,
  Heading,
    AccordionItem,
} from "@chakra-ui/react";
export const FaqAccordion = ({questionTitle, questionAnswer}) => {
  return (
    <>
     <AccordionItem
     py="1rem"
     borderBottom="0.5px solid #000"
     >
          <AccordionButton background="none">
            <Box flex="1" textAlign="left">
              <Heading fontWeight="600" fontSize={["3.3vw","1.322vw"]} lineHeight={["1.5","2rem"]}>
            {questionTitle}
              </Heading>
            </Box>
            <AccordionIcon fontSize="2.4rem" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text
            lineHeight={["1.5rem","2rem"]}
            fontSize={["2.90vw","1.058vw"]}
            >
           {questionAnswer}
            </Text>
          </AccordionPanel>
    </AccordionItem>
      </>
  );
};
