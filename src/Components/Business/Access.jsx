import styled from 'styled-components'
import { H2, H3, H4, P } from '../../Utils/styled/Typograpyhy'
import learningHub from "../../assets/icon/learnhub2.png"
import { executiveData } from '../../constants'
import tick from "../../assets/icon/tick.png"

const Access = () => {
  return (
    <StyledAccess>
        <section>
        <H4>
        Intensive coaching program,
        </H4>
        <H2>On Product Thinking</H2>
        <P>For companies with 2 - 100 staffs to empower their key employees</P>
        <div className='dataList'>
            {executiveData.map(data => {
                return(<div className='data'>
                    <img src={tick} alt="tick checks" />
                    <H3 fs="3.5vw">{data}</H3>
                    </div>)
            })}
        </div>
        </section>
        <section>
            <img src={learningHub} alt="learning hub" />
        </section>
      
    </StyledAccess>
  )
}

export default Access

const StyledAccess = styled.div`
    padding: 4.5rem 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h4{
        color: #0046FF;
    }
    h2{
        color: var(--Title-Text);
    }
    p,h3{
        color:var(--Body-Text) ;
    }
    .dataList{
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .data{
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        padding: 10rem 9.6rem;
        h2{
            margin: 0.8rem 0 1.6rem 0;
        }
        h3{
            font-size: 2rem;
        }
        .dataList{
            margin-top: 4rem;
            display: grid;
            grid-template-columns: repeat(2,auto);
            column-gap: 5rem;
            row-gap: 5rem;
        }
    }
`
