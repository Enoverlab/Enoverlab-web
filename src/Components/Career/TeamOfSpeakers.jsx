import styled from "styled-components"
import { careerspeakers } from "../../constants"

const TeamOfSpeakers = () => {
  return (
    <StyledTeamOfSpeakers>
        <header>
            Meet Our Amazing Team Of Speakers
        </header>
        <p>
            Expect the best from our selected group of speakers.
        </p>
        <section className="speakers">
            {
                careerspeakers.map(speakerInfo => <SpeakerCard key={speakerInfo.speakerImg} speakerImg={speakerInfo.speakerImg} speakerName={speakerInfo.speakerName} speakerPosition={speakerInfo.speakerPosition} speakerBio={speakerInfo.speakerBio} />)
            }
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
    .speakers{
        display: grid;
        margin-top: 2.8rem;
        gap: 2.4rem;
    }
    @media (min-width: 700px) {
        .speakers{
            margin-top: 3.8rem;
            grid-template-columns: repeat(2, auto);
        }
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
        .speakers{
            margin-top: 4.8rem;
            grid-template-columns: repeat(4, auto);
        }

    }
`

const SpeakerCard = ({speakerImg, speakerName, speakerPosition, speakerBio})=>{
    return(<StyledSpeakerCard>
            <img src={speakerImg} alt="speaker bio" />
            <div>
                <h2>
                    {speakerName}
                </h2>
                <h3>
                    {speakerPosition}
                </h3>
                <p>
                    {speakerBio}
                </p>
            </div>
    </StyledSpeakerCard>)
}

const StyledSpeakerCard = styled.div`
    img{
        width: 100%;
    }
    h2{
        font-size: 1.8rem;
        margin-top: 1.4rem;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.48px;
    }
    h3{
        font-size: 2rem;
        font-weight: 600;
        line-height: 3rem;
        margin : 0.4rem 0 0.8rem 0; 
    }
    @media (min-width: 700px) {
        
    }

    @media (min-width: 1024px) {
        color: #373737;
        h2{
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 3rem;
            letter-spacing: 0.48px;
        }
        h3{
            font-size: 2rem;
            font-weight: 600;
            line-height: 3rem; 
        }
        p{
            font-size: 1.3vw;
            font-weight: 400;
            line-height: 3rem;
            
        }
    }
`
