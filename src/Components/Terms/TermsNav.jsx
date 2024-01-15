import React from 'react'
import {Box, Text, Heading, OrderedList, ListItem} from '@chakra-ui/react'
import { TermsNavLink } from './TermsContentData'
import {Link} from 'react-router-dom'
export const TermsNav = () => {
    const [active, setActive] = React.useState('payment-policy')
  return (
    <Box
    p=""
    boxShadow="0px 0px 5px 1px rgba(52, 41, 107, 0.15)"
   
    >
        {
            TermsNavLink.map(({name, url}) => {
                return (
                    <Box key={url}
                    p="1.1875rem 7rem 1.8125rem 1.875rem"
                    onClick={()=>{setActive(url)}}
                    borderLeft={active === url ? "4px solid #0046FF" : "4px solid #fff"}
                    borderLeftRadius="0px 10px 10px 0px;"
                    >
                        <a href={`/policy#${url}`}>
                        <Text
                        fontSize="1rem"
                        lineHeight="1.6875rem"
                        color="#000"
                        mt="1.25rem"    
                        >{name}</Text>
                        </a>
                    </Box>
                )
            })
        }
    </Box>
  )
}
