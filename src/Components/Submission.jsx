import styled from "styled-components"
import checkmark from "../assets/icon/checkmark.svg"
import {motion} from "framer-motion"
const Submission = ({heading, subheading}) => {
  return (
    <motion.div
    initial={{opacity : 0, scale : 0.5}}
    animate={{opacity : 1 , scale : 1}}
    >
        <StyledSubmission>
        <div>
            <img src={checkmark} alt="" />
        </div>
        <h1>
            {heading}
        </h1>
        <p>
            {subheading}
        </p>
    </StyledSubmission>
    </motion.div>
    
  )
}
export default Submission

const StyledSubmission = styled.div`
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    h1{
        font-size: 2.4rem;
        font-weight: 700;
        color: #00001A;
    }
    p{
        font-size : 1.4rem;
        color : #373737;
    }
    @media (min-width: 1024px) {
        h1{
        font-size: 3.6rem;
        }
        p{
            font-size : 2rem;
        }
    }
`
