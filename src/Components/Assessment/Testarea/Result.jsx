import { Field, Form, Formik } from 'formik'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import LoadingScreen from '../../LoadingScreen';
import questionMark from "../../../assets/assessment/questionMark.svg"
import NotFound from '../../NotFound';

const ResultComponent = () => {
  const [result, setResult] = useState()
  const [answerData, setAnswerData] = useState()
  const [answers, setAnswers] = useState({answerIdx : 0, answerSLength : 0})
  const [loading, setLoading] = useState(true)
  const {user} = useParams()
  const navigate = useNavigate()
  const handleNextQuestion = async()=>{
    if(answers.answerIdx === answers.answerSLength -1){
      setLoading(true)
      toast.success('Redirecting to assessment page')
      setTimeout(()=>{
        navigate(`/assessment/${user}`)
        setLoading(false)
      },2000)
    }
    setAnswers((prev)=>({...prev, answerIdx : prev.answerIdx + 1}))
  }

  const handlePreviousQuestion = ()=>{
      if(answers.answerIdx <= 0){
          return
      }
      setAnswers((prev)=>({...prev, answerIdx : prev.answerIdx - 1}))
  }
  useEffect(()=>{
    const getAssessmentResult = async()=>{
      try {
        const response = await axios.get(`/web-assessment/result?userId=${user}`)
        setResult(response.data)
        console.log(response.data)
        setAnswers((prev)=>({...prev, answerSLength : response.data.answers.length}))
      } catch (error) {
        toast.error('Network error occured, kindly refresh again')
      }finally{
        setTimeout(()=>{
          setLoading(false)
        },1500)
      }
    }
    getAssessmentResult()
  },[user])

  const getQuestionData = useCallback(() => {
    if (!result || !result.answers) return null;
    return result?.answers[answers.answerIdx];
  }, [result, answers]);

  useEffect(()=>{
    setAnswerData(getQuestionData())
  }, [getQuestionData])

  if(loading) return(<LoadingScreen/>)
  if(!result) return(<NotFound headline={'No results found'} />)
  return (
    <StyledResultComponent>
      <header>
        <div>
          <h4>
            ASSESSMENT RESULT
          </h4>
          <p>
            {result?.userId.name}
          </p>
        </div>
        <p>
          Percentage based on Product Topics
        </p>
      </header>
      <div className='productTopics'>
        {
          result?.score.map((item,idx)=> <CircularProgress key={idx} percentage={item.percentageScore} aspect={item.aspect} />)
        }
        
      </div>
      <p className="feedback">
        Feedback: {result?.feedback}
      </p>
      <main>
        <header>
          Assessment Test
        </header>
        <h3>
          <img src={questionMark} alt="" />
          Question {answers.answerIdx + 1}
        </h3>
        <div className="question">
          {
            <div dangerouslySetInnerHTML={{__html:answerData?.question}}></div>
          }
        </div>
        <Formy answersAttr={answers} result={answerData} handlePreviousQuestion={handlePreviousQuestion} handleNextQuestion={handleNextQuestion}/>
      </main>

    </StyledResultComponent>
  )
}

export default ResultComponent

const StyledResultComponent = styled.div`
  header{
    margin: 4rem 11vw 2rem 11vw;
    div{
      display: flex;
      flex-direction: column;
      margin-bottom: 1.6rem;
      h4{
        color: #303030;
        margin-bottom: 2.1rem;
        font-size: 1.6rem;
        font-weight: 600;
      }
      p{
        color: #8C8C8C;
        font-size: 1.6rem;
        font-style: normal;
        text-transform: capitalize;
        font-weight: 500;
      }
    }
    p{
      color: #3D3D3D;
      font-size: 1.4rem;
      font-style: italic;
      font-weight: 400;
    }
  }
  .productTopics{
    margin: 0rem 9vw;
    padding: 2rem 20.22vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1.55rem;
    gap: 1.5rem;
    background: #F8F8F8;
  }
  p.feedback{
    border-radius: 20px;
    margin-top: 5.1rem;
    color: #3D3D3D;
    font-size: 1.6rem;
    padding: 2rem 15vw;
    font-style: italic;
    background: #EFFBFF;
  }
  main{
    margin: 2rem 1.6rem;
    header{
      margin: 0;
      margin-bottom: 1.8rem;
      color: #303030;
      font-size: 1.6rem;
      font-style: italic;
    }
    h3{
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2.4rem;
      color: #1C1C1C;
      font-size: 1.8rem;
      font-weight: 600;
    }
    .question{
      padding: 2.8rem 6.36vw;
      border-radius: 5px;
      background: #F5F5F5;
      color: #3D3D3D;
      font-size: 3.18vw;
    }
  }
  @media (min-width: 700px) {
    header{
      margin: 5rem 9vw 2rem 9vw;
      div{
        flex-direction: row;
        justify-content: space-between;
        h4{
          font-size: 1.8rem;
        }
        p{
          font-size: 1.6rem;
        }
      }
      p{
        font-size: 1.8rem;
      }
    }
    .productTopics{
      margin: 0rem 9vw;
      padding: 3.5rem 5.4rem;
      flex-direction: row;
      justify-content: center;
      border-radius: 2rem;
    }
    p.feedback{
      padding: 2rem 8vw;
      text-align: center;
    }
    main{
      margin: 8.2rem 10.77vw;
      padding: 3.9rem 2vw ;
      border-radius: 20px;
      border: 1px solid #DDD;
      box-shadow: 0px 6px 33px 20px rgba(0, 0, 0, 0.10);
      header{
        color: #303030;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
      .question{
        border-radius: 1rem;
        font-size: 1.52vw;
      }
    }
  }
  @media (min-width: 1024px) {
    header{
      margin: 9.1rem 9.72vw 2rem 9.72vw;
    }
    .productTopics{

    }
    main{
      margin: 8.2rem 12.77vw;
      padding: 3.9rem 3.6vw ;
      .question{
        display: flex;
        align-items: center;
      }
    }
  }
`




const Formy = ({answersAttr, result,handlePreviousQuestion, handleNextQuestion})=>{
  return(<Formik
    enableReinitialize
    initialValues={{ selectedOption: result?.selectedOption || [] }}
    onSubmit={() =>{
      handleNextQuestion()
    }}
  >
    {
      ({values})=>(<StyledForm>
          {result?.options.map((option,idx) => (
            result?.multipleAnswers ? (<OptionLabel
              key={idx}
              option={option}
              values = {values.selectedOption}
              isSelected={values.selectedOption.includes(option)}
              isCorrect={result.correctAnswer.includes(option)}
            >
              <Field
                as='input'
                type="checkbox"
                name="selectedOption"
                disabled
                checked={values.selectedOption.includes(option)}
                value={option}
              />
              <span className="checkmark"></span>
              {option}
            </OptionLabel> ) : (<OptionLabel
              key={idx}
              selectedOption = {values.selectedOption}
              isSelected={option === values.selectedOption}
              isCorrect={option === result.correctAnswer}
            >
              <Field
                as='input'
                type="radio"
                name="selectedOption"
                disabled
                checked={values.selectedOption === option}
                value={option}
              />
              <span className="checkmark"></span>
              {option}
            </OptionLabel> )
          ))}
          <footer>
            {
              answersAttr.answerIdx > 0 &&
              <div onClick={handlePreviousQuestion} className='previous'>Previous</div>
            }
            <Button type="submit">{answersAttr.answerIdx === answersAttr.answerSLength -1 ? 'Retake Quiz' : 'Next'}</Button>
          </footer>
      </StyledForm>)
    }

  </Formik>)
}
const StyledForm =  styled(Form)`
  @media (min-width: 700px) {
    margin: 4.7rem 5.9vw;
    footer{
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      .previous{
      color: #7B7B7B;
      text-align: center;
      cursor: pointer;
      border-radius: 0.5rem;
      border: 1px solid #003AD4;
      font-size: 18px;
      font-weight: 500;
      padding: 10px 0rem;
      width: 14.5rem;
  }
    }
  }
`

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 3.18vw;
  gap: 10px;
  padding: 10px;
  margin-bottom: 2.1rem;
  border: 1px solid ${({ isSelected, isCorrect}) =>{
    return isCorrect && isSelected ? "#488D4B" : isSelected && !isCorrect ?"#F3868C" : isCorrect ? '#488D4B' : "#ccc"
  }};
  background: ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? "#e6ffe6" : "#ffe6e6") : "transparent"};
  border-radius: 5px;
  cursor: pointer;
  transition: all 1s ease-out;

  &:hover {
    border-color: ${({ isSelected, isCorrect }) =>
      isSelected ? (isCorrect ? "darkgreen" : "darkred") : "#888"};
  }
  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all 1s ease-out;
    width: 16px;
    height: 16px;
    border: 1px solid ${({ isSelected, isCorrect}) =>{
      return isCorrect && isSelected ? "#488D4B" : isSelected && !isCorrect ?"#F3868C" : isCorrect ? '#488D4B' : "#ccc"
    }};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    position: relative;
  }
  input[type="radio"]:checked, input[type='checkbox']:checked{
    border: 1px solid ${({ isSelected, isCorrect}) =>{
    return isCorrect && isSelected ? "#488D4B" : isSelected && !isCorrect ?"#F3868C" : isCorrect ? '#488D4B' : "#ccc"
  }};
  }
  input[type="radio"]::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${({ isSelected, isCorrect}) =>{
    return isSelected ? (isCorrect ? "#488D4B" : "#F3868C") : "#488D4B"
    }};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }
  input[type="radio"]:checked::before {
    visibility: visible;
  }
  @media (min-width: 700px) {
    font-size: 1.25vw;
    
  }
`;


const Button = styled.button`
  border-radius: 5px;
  border: 1px solid #003AD4;
  color: #003AD4;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 0rem;
  cursor: pointer;
  width: 14.5rem;
`;

const CircularProgress = ({ percentage, aspect,  }) => {
  return (<StyledProgress>
    <p className={aspect}>{aspect}</p>
    <div className='circleContainer'>
      <CircularProgressbar
        value={percentage}
        text={``}
        strokeWidth={8}
        styles={buildStyles({
          path: { stroke: "#4A90E2", strokeLinecap: "round" },
          trail: { stroke: "#EAEAEA" },
          text: { fill: "#333", fontSize: "16px", fontWeight: "bold" },
          pathColor: "#4A90E2",
          trailColor: "#EAEAEA",
          textColor: "#333",
          strokeLinecap: "round", 
          rotation: 0.55, // ✅ Start angle (0.75 = 270 degrees)
        })}
      />
    </div>
    <h2>{percentage}%</h2>
  </StyledProgress>
  );
};
const StyledProgress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  .circleContainer{
    width: 15rem;
    .CircularProgressbar-path {
    stroke-width: 10px !important; /* Adjust stroke thickness */
    }
    .CircularProgressbar-trail {
      stroke-width: 10px !important; /* Adjust background thickness */
    }
  }
  p{
    color: #3D3D3D;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  p.total{
    font-weight: 800;
  }
  h2{
    color: #3D3D3D;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
  }
  @media (min-width: 700px) {
    gap: 0.87rem;
    p{
      font-size: 1.5rem;
    }
    h2{
      font-size: 2.1rem;
    }
    
  }
  @media (min-width: 1024px) {
    p{
      font-size: 1.06vw;
    }
    .circleContainer{
      width: 18rem;
      .CircularProgressbar-path {
      stroke-width: 8px !important; /* Adjust stroke thickness */
      }
      .CircularProgressbar-trail {
        stroke-width: 2px !important; /* Adjust background thickness */
      }
    }
  }
`