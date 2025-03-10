import styled from "styled-components"
import headImage from "../../../assets/assessment/headImage.svg"
import questionMark from "../../../assets/assessment/questionMark.svg"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useTest } from "../../../context/TestContext"

const multipleSelectValidationSchema = Yup.object({
    selectedOptions: Yup.array().min(1, "Select at least one option"),
});

const singleSelectValidationSchema = Yup.object({
    selectedOption: Yup.string().required("Please select an option"),
});

const TestComponent = ({headlineImage,questionType = 'text',multipleAnswer}) => {
    const testTools = useTest()
  return (
    <StyledTestComponent>
      <div className="headlineImage">
        <img src={headlineImage ?? headImage} alt="assessment headimage" />
      </div>
      <header>
        Assessment Test
      </header>
      <main>
        <h3>
          <img src={questionMark} alt="" />
          Question {testTools.questionIdx + 1}
        </h3>
        <div className="question">
          {
            questionType === 'text' ? (<div dangerouslySetInnerHTML={{__html: testTools.questionData.question}}></div>) :(<img src={testTools.questionData.question} alt="questionImg" />)
          }
        </div>

        {
          multipleAnswer ? <MultiSelect /> : <SingleSelect/>
        }
        
      </main>

    </StyledTestComponent>
  )
}

export default TestComponent

const StyledTestComponent = styled.div`
padding: 2rem 3.63vw;
.headlineImage{
  margin-bottom: 2.6rem;
  img{
    width: 92vw;
    border-radius: 10px;
  }
}
header{
  color: #303030;
  text-align: start;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 1.3rem;
}
main{
  h3{
    display: flex;
    align-items: center;
    color: #1C1C1C;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
    gap: 1rem;
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
  padding: 4rem 12vw;
  .headlineImage img{
    width: 72.5vw;
    object-fit: cover;
    height: 25rem;
  }
  header{
    margin-bottom: 3rem;
  }
  main{
    h3{
      img{
        width: 2.5rem;
      }
      font-size: 2.2vw;
    }
    .question{
      font-family: inter;
      font-size: 1.52vw;
    }
  }
}
@media (min-width: 1024px) {
  padding: 4rem 14.2vw;
  .headlineImage img{
  }
  main{
    h3{
      font-size: 1.8vw;
    }
  }
}
`
  
const SingleSelect = () => {
  const testTools = useTest()
  const {handleNextQuestion, questionData, handlePreviousQuestion, userAnswers,questionsLength,questionIdx} = testTools
  console.log(userAnswers[questionData.id])
return (
  <Formik
  initialValues={{ selectedOption: userAnswers[questionData.id] ?? "" }}
  enableReinitialize 
  validationSchema={singleSelectValidationSchema}
  onSubmit={(values, { resetForm }) =>{
    handleNextQuestion({[questionData.id]: values.selectedOption})
  }}
  >
  {({dirty,isValid}) => (
    <Form>
      <StyledForm>
        {
          questionData.options.map((item,idx)=><label key={idx}>
          <Field type="radio" name='selectedOption' value={item} />
          {item}
          </label>)
        }

        <ErrorMessage name="selectedOption" component="div" style={{ color: "red" }} />
        <div className="ctas">
          {questionIdx > 0 && <div className="previous" onClick={handlePreviousQuestion}>Previous</div>}
          <button disabled={!(isValid || dirty)} type="submit">{questionIdx < questionsLength ? 'Save and Continue': "Submit"}</button>
        </div>
        
      </StyledForm>
    </Form>
  )}
  </Formik>
);
};
  
  
const MultiSelect = () => {
    return (
      <Formik
        initialValues={{ selectedOptions: [] }}
        validationSchema={multipleSelectValidationSchema}
        onSubmit={(values) => alert(`You selected: ${values.selectedOptions.join(", ")}`)}
      >
        {() => (
          <Form>
            <label>
              <Field type="checkbox" name="selectedOptions" value="2" />
              2
            </label>
            <label>
              <Field type="checkbox" name="selectedOptions" value="3" />
              3
            </label>
            <label>
              <Field type="checkbox" name="selectedOptions" value="5" />
              5
            </label>
            <label>
              <Field type="checkbox" name="selectedOptions" value="6" />
              6
            </label>
  
            <ErrorMessage name="selectedOptions" component="div" style={{ color: "red" }} />
  
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
};

const StyledForm = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  label{
    display: flex;
    align-items: center;
    color: #3D3D3D;
    gap: 1rem;
    font-size: 1.4rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px  solid #D9D9D9;
    font-weight: 400;
  }
  input[type="radio"]{
    transform: scale(1.5);
    cursor: pointer;
  }
  .ctas{
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.2rem;
  }
  .previous{
    color: #7B7B7B;
    width: 100%;
    max-width: 31rem;
    font-size: 1.5rem;
    padding: 0.8rem 0rem;
    text-align: center;
    cursor: pointer;
    border-radius: 7.581px;
    border: 0.758px solid #7B7B7B;
  }
  button{
    width: 100%;
    border-radius: 5px;
    background: #003AD4;
    color: white;
    padding: 1rem 0rem;
    font-weight: 500;
    font-size: 1.5rem;
    max-width: 31rem;
  }
  @media (min-width: 700px) {
    label{
      font-size: 1.8rem;
    }
    .ctas{
      flex-direction: row;
      gap: 2.5rem;
    }
    .previous{
      max-width: 18.6rem;
      padding: 1rem 0rem;
    }
  }
  @media (min-width: 1024px) {
    
  }
`
  

