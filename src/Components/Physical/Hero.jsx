import { Box, Heading, Image, Flex, Text } from '@chakra-ui/react'
import HeroImg from "../../assets/physical/heroImg.png"
export const Hero = () => {

  return (
    <Box py={["8%","5%"]}
    >
    <Flex
    justifyContent="space-between"
    alignItems="center"
    flexDir={["column", "row"]}
    rowGap="2rem"
    >
      <Box
      width={["100%","45%"]}
      >
        <Heading
        color="#121212"
        fontSize={["2.8rem","4.5rem"]}
        lineHeight="102%"
        fontWeight="800"     
        >
        Admissions 
        </Heading>
        <Heading
        color="#0046FF"
        fontSize={["2.8rem","4.5rem"]}
        lineHeight="102%"
        fontWeight="800"
        >
      are Ongoing! 
        </Heading>
        <Text
        fontSize={["0.9rem","1.25rem"]}
        color="#555"
        mt={["1rem","1.875rem"]}
        >
        Sign Up for our programs to take your life and career to the next level
        </Text>
      </Box>
      <Box
      width={["100%","40%"]}
      >
        <Image src={HeroImg} alt="physical space hero" />
      </Box>
    </Flex>
    </Box>
  )
}
