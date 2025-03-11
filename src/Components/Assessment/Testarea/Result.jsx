import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { useTest } from '../../../context/TestContext'
import { PieChart, Pie, Cell } from "recharts";

const Result = () => {
  return (
    <div>
      <div>
        <CircularProgressChart percentage={62} label="User Research" />;
      </div>
      <Formy/>

    </div>
  )
}

export default Result

const CircularProgressChart = ({ percentage, label }) => {
  const data = [
    { name: "Remaining", value: 100 - percentage },
    { name: "Completed", value: percentage },
  ];

  const COLORS = [ "#EAEAEA","#5474F1",]; // Blue for progress, Gray for remaining

  return (
    <div style={{ textAlign: "center" }}>
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40} // Creates the donut effect
          outerRadius={50}
          startAngle={90}
          endAngle={-270} // Ensures clockwise progress
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

const Formy = ()=>{
  const testTools = useTest()
    const { questionData, userAnswers} = testTools
    console.log(userAnswers[questionData.id])
    return(<Formik
      initialValues={{ selectedOption: userAnswers[questionData.id]}}
      onSubmit={() =>{

      }}
    >
      {
        ({values})=>(<Form>
          {questionData.options.map((option,idx) => (
            <OptionLabel
              key={idx}
              selectedOption = {values.selectedOption}
              isSelected={option === values.selectedOption}
              isCorrect={option === questionData.correct}
            >
              <Field
                as='input'
                type="radio"
                name="selectedOption"
                disabled
                checked={values.selectedOption === option}
                value={option}
              />
              {option}
            </OptionLabel> 
          ))}

          <Button type="submit">Next</Button>

        </Form>)
      }

    </Formik>)
}


const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid ${({ isSelected, isCorrect, selectedOption }) =>{
    console.log(isSelected,isCorrect,selectedOption)
    return isSelected ? (isCorrect ? "green" : "red") : "#ccc"
  }};
  background: ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? "#e6ffe6" : "#ffe6e6") : "transparent"};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: ${({ isSelected, isCorrect }) =>
      isSelected ? (isCorrect ? "darkgreen" : "darkred") : "#888"};
  }
`;


const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: darkblue;
  }
`;