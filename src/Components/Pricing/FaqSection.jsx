import React from "react";
import { Box, Accordion, Heading, Center } from "@chakra-ui/react";
import { FaqContent } from "../../constants";
import { FaqAccordion } from "./FaqContainer";
export const FaqSection = () => {
  return (
    <Box padding={["0 2rem 6.4rem 2rem", "0 16.35vw 16rem 16.35vw"]}>
      <Center>
        <Heading
          fontSize={["5vw", "2vw"]}
          textAlign="center"
          fontWeight="700"
          mb="32px"
          width={["75%", "50%"]}
        >
          Frequently Asked Questions (FAQ)
        </Heading>
      </Center>
      <Box>
        <Accordion allowToggle border="0px solid #FFFF">
          {FaqContent.map(({ questionTitle, questionAnswer }) => (
            <FaqAccordion
              key={questionTitle}
              questionTitle={questionTitle}
              questionAnswer={questionAnswer}
            />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
