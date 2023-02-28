import React from 'react'
import styled from 'styled-components'
import salesChat from '../../assets/sales/salesChat.png'
const SectionThree = () => {
  return (
    <StyledSectionThree>
        <div className="styled-section-three">
            <p>
            An example is Jimmy:
            </p>
            <div className="sales-chat-image">
                <img src={salesChat} alt=""/>
            </div>
            <p>
            I just showed you that because I can help you achieve this goal easily without any knowledge of coding just like Jimmy.
            </p>
            <p>
                <span>
                You see, 
                </span>
            </p>
            <p>
            It is no surprise that many companies today are Now building with Technology in mind.
            </p>

            <p>
From the old companies who are evolving everything they do with Technology 
</p>
<p>
To the startups who are building technology products from ground up.
            </p>
        </div>
    </StyledSectionThree>
  )
}

export default SectionThree

const StyledSectionThree = styled.div``