import React from 'react'
import styled from 'styled-components'
import heroImg from '../../../assets/assessment/hero.png'

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <img src={heroImg} alt="assessment img" />
      </div>
      <div>
        <header>
            Why Take This Assessment?
        </header>
        <section className="list">
            <ListItem content={'Evaluate your Product Management skill set'} bgcolor={'#F2F9FF'}/>
            <ListItem content={'Prioritize key areas for improvement'} bgcolor={'#FFF7F2'}/>
            <ListItem content={'Enhance your career qualifications'} bgcolor={'#F9FFEF'}/>
            <ListItem content={'Gain insights to stay ahead in the industry.'} bgcolor={'#FFF2F2'}/>
        </section>
        <div className="button">
            <button>
                Begin Assessment
            </button>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero

const ListItem = ({content, bgcolor})=>{
    return(<StyledListItem bgcolor={bgcolor}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.83789 0.5L10.8379 5.5L5.83789 10.5L0.837891 5.5L5.83789 0.5Z" fill="#3D3D3D"/>
        </svg>
        <p>
            {content}
        </p>
    </StyledListItem>)
}

const StyledHero = styled.div`
    padding: 2.4rem 0 7.4rem 0;
    header{
        margin-top: 4.8rem;
        color: #1C1C1C;
        text-align: center;
        font-weight: 600;
        font-size: 3.6rem;
    }
    section.list{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.6rem;
        margin-top: 3.3rem;
    }
    div.button{
        display: flex;
        justify-content: center;
    }
    button{
        margin-top: 4.4rem;
        font-weight: 500;
        border-radius: 0.5rem;
        color : white;
        width: 23.2rem;
        padding: 1rem 0rem;
        font-size: 1.6rem;
        background-color: #003AD4;
    }

    @media (min-width: 700px) {
        padding: 5.4rem 0rem 7.4rem 0rem;
    }
    @media (min-width: 1024px) {
        padding: 4.6rem 0vw;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        header{
            font-size:3.61vw;
            margin-top: 0;
            text-align: left;
        }
        section.list{
            align-items: flex-start;
            gap: 1rem;
        }
        div.button{
            justify-content: flex-start;
        }
        button{
            margin-top: 5.1rem;
            width: 30.1rem;
            padding: 1rem 0rem;
            font-size: 1.8rem;
            background-color: #003AD4;
        }
    }
`

const StyledListItem = styled.div`
    font-family: "Inter", serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 3.1rem;
    padding: 8px 15px ;
    background-color: ${(props)=> props.bgcolor || ''};
    p{
        margin-bottom : 0;
        font-size: 3.63vw;
    }
    @media (min-width: 700px) {
        p{
            font-size: 1.8rem;
        }
    }
    @media (min-width: 1024px) {
        /* font-size: ; */
        border-radius: 3.7rem;
    }
`