import styled from "styled-components"
import circles from "../../assets/icon/circles.png"

const Provides = () => {
  return (
    <StyledProvides>
      <section className="top_part">
        <div>
            Enoverlab provides over 20,000 talents across all its platforms free Product Management knowledge, resources, and community to help them thrive.
        </div>
      </section>
      <section className="bottom_part">
        <p>
            We have our head office in Lekki, Lagos, Nigeria with learning centers in Ikeja, Lagos; Ibadan, Oyo state; Wuse 2, Abuja; Awka, Anambra; and Nairobi, Kenya. This demonstrates our commitment to empowering talents at the grassroots level and ensuring diversity of talent development across Africa.
        </p>
        <p>
            In July 2023, we introduced the first specialized product management training in Africa - the Technical Product Management Program to help existing product managers understand the technical side of building products. In 2024, we also launched the first Growth Product Management program and Artificial Intelligence Product Management program in Africa.
        </p>
      </section>
    </StyledProvides>
  )
}

export default Provides

const StyledProvides = styled.div`
    .top_part{
        div{
            background: url(${circles});
            background-color: #003AD4;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            /* border-radius: 20px; */
            color: #FFF;
            text-align: center;
            font-size: 2.2rem;
            line-height: 35px;
            padding: 15rem 2.6rem;
            
        }
    }
    .bottom_part{
        padding: 5rem 2rem ;
        color: #3D3D3D;
        background: #EEFCFC;
        text-align: justify;
        font-size: 1.2rem;
        line-height: 2.2rem;
        p{
            margin-top: 2rem;
        }
    }
    @media (min-width: 1024px) {
        .top_part{
            background: #EEFCFC;
            padding: 14.8rem 10rem;
            div{
                border-radius: 2rem;
                padding: 6.7rem 19.9rem;
                font-size: 3.2rem;
                line-height: 5rem;
            }
        }
        .bottom_part{
            padding: 12.7rem 2rem ;
            color: #3D3D3D;
            background: #fff;
            text-align: justify;
            font-size: 2.2rem;
            line-height: 3.1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        p{
            width: 60%;
            margin-top: 2rem;
        }
    }
    }
    
`
