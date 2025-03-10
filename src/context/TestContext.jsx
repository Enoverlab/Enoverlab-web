import { createContext, useContext, useEffect, useState } from "react";
// import axios from 'axios'
// import { toast } from "react-toastify";
import { useCallback } from "react";

const data = [
    { id: 1, question: "What is 2 + 1?", questionType : 'text', options: ["2", "3", "4", "5"], correct: "3", section : 'User Research', multipleAnswer : false },
    { id: 2, question: "What is 2 + 2?", questionType : 'text', options: ["2", "3", "4", "6"], correct: "4", section : 'MVP', multipleAnswer : false },
    { id: 3, question: "What is 3 + 3?", questionType : 'text', options: ["2", "6", "7", "10"], correct: "6", section : 'User Experience', multipleAnswer : false },
    { id: 4, question: "What is 4 + 4?", questionType : 'text', options: ["2", "8", "11", "10"], correct: "8", section : 'Market Value', multipleAnswer : false },
    { id: 5, question: "What is 5 + 5?", questionType : 'text', options: ["2", "12", "11", "10"], correct: "10", section : 'User Experience', multipleAnswer : false },
    { id: 6, question: "What is 6 + 6?", questionType : 'text', options: ["2", "12", "11", "10"], correct: "12", section : 'MVP', multipleAnswer : false },
    { id: 7, question: "What is 7 + 7?", questionType : 'text', options: ["2", "12", "14", "12"], correct: "14", section : 'MVP', multipleAnswer : true },
]
export const TestContext = createContext({}) 

export const TestContextProvider = ({children})=>{
    const [testData] = useState([...data])
    const [userAnswers, setUserAnswers] = useState({})
    const [questionIdx, setQuestionIdx] = useState(0)
    const [questionData, setQuestionData] = useState(testData[questionIdx])
    const [loading] = useState(false)
    const questionsLength = testData.length

    const handleNextQuestion = async(newAnswers)=>{
        setUserAnswers((prev)=>({...prev, ...newAnswers}))
        if(questionIdx === questionsLength){
            return
        }
        setQuestionIdx(questionIdx + 1)
    }

    const handlePreviousQuestion = ()=>{
        if(questionIdx <= 0){
            return
        }
        setQuestionIdx(questionIdx - 1)
    }

    const getQuestionData = useCallback(() => {
        console.log(userAnswers)
        return testData[questionIdx];
    }, [testData, questionIdx,userAnswers]);

    useEffect(()=>{
        setQuestionData(getQuestionData())
    }, [getQuestionData])
    

    return(<TestContext.Provider value={{questionData,questionIdx,questionsLength,handleNextQuestion,handlePreviousQuestion, userAnswers, loading}}>
        {children}
    </TestContext.Provider>)
}

export const useTest = ()=>useContext(TestContext)