import styled from "styled-components"

const TeamOfSpeakers = () => {
  return (
    <StyledTeamOfSpeakers>
        <header>
            Meet Our Amazing Team Of Speakers
        </header>
        <p>
            Expect the best from our selected group of speakers.
        </p>
        <section>
            <SpeakerCard/>
        </section>
    </StyledTeamOfSpeakers>
  )
}

export default TeamOfSpeakers

const StyledTeamOfSpeakers = styled.div`
    padding: 4rem 2.4rem;
    header{
            color:  #00001A;
            font-size: 2.3rem;
            font-weight: 700;
            margin-bottom: 8px;
            line-height: normal;
        }
        p{
            color: #373737;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 3rem;
        }
    @media (min-width: 1024px) {
        padding: 8.4rem 9.6rem;
        header{
            color:  #00001A;
            font-size: 3.6rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
            line-height: normal;
        }
        p{
            color: #373737;
            font-size: 2.4rem;
            font-weight: 400;
            line-height: 3rem;
        }

    }
`

const SpeakerCard = ({speakerImg, speakerName, speakerPosition, speakerBio})=>{
    return(<>
    
    </>)
}
