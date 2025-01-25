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
              <Heading fontWeight="600" fontSize={["3.9vw","1.822vw"]} lineHeight={["1.9","2.9rem"]}>
            {questionTitle}
              </Heading>
            </Box>
            <AccordionIcon fontSize="2.4rem" />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text
            lineHeight={["1.9rem","3.2rem"]}
            fontSize={["3.6vw","1.858vw"]}
            >
           {questionAnswer}
            </Text>
          </AccordionPanel>
    </AccordionItem>
      </>
  );
};
