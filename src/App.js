import { useEffect } from "react";

import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Resources from "./Pages/Resources";
import Corporate from "./Pages/Corporate";
import { Routes, Route} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./Utils/Theme";
import BlogContentPage from "./Pages/BlogContentPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Executive from "./Pages/Executive";
import Sales from "./Pages/Sales";
import ProgramsAd from './Pages/ProgramsAd'
import Upskill from './Pages/Upskill'
import PMP from './Pages/PMP'
import Diaspora from './Pages/Diaspora'
import Policy from './Pages/Policy'
import Physical from './Pages/Physical'
import {ChakraProvider} from '@chakra-ui/react'
import AI from "./Pages/AI";
import Kenya from "./Pages/Kenya";
import Lekki from "./Pages/Lekki";
import Anambra from "./Pages/Anambra";
import Ikeja from "./Pages/Ikeja";
import Ibadan from "./Pages/Ibadan";
import Abuja from "./Pages/Abuja";
import Business from "./Pages/Business";
import Growth from "./Pages/Growth";
import Technical from "./Pages/Technical";
import Career from "./Pages/Career";
import ContactUs from "./Pages/ContactUs";
import Payment from "./Pages/Payment";
import axios from "axios";
import { BlogContextProvider } from "./context/BlogContext";
import { ToastContainer } from "react-toastify";
import RespectivePayment from "./Pages/RespectivePayments";
import AssessmentLanding from "./Pages/AssessmentLanding";
import Assessment from "./Pages/Assessment";
import { TestContextProvider } from "./context/TestContext";
import Result from "./Pages/Result";
import { ChatbotContainer } from "./Components/chatbot/ChatbotContainer";
import ScholarshipPage from "./Pages/ScholarshipPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
axios.defaults.baseURL = process.env.REACT_APP_APIBASE_URL

function App() {
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: false, // Only once animation
    })
  },[]);

  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap');

  :root { 
    font-size : 10px;
    font-family: "Plus Jakarta Sans", sans-serif;
    --Title-Text: #00001A;
    --Body-Text: #373737
  }
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
  scroll-behavior: smooth;
}
  `
  return (
    <ChakraProvider>
    <ThemeProvider theme={theme}>
    <ToastContainer/>
      <GlobalStyle />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/programs" element={<Pricing />} />
        <Route path="/aipmp" element={<AI/>} />
        <Route path="/blog" element={
          <BlogContextProvider>
            <Blog />
          </BlogContextProvider>
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/payments/:id" element={<RespectivePayment />} />
        <Route path="/assessment/about" element={<AssessmentLanding />} />
        <Route
          path="/assessment/:user"
          element={
            <TestContextProvider>
              <Assessment />
            </TestContextProvider>
          }
        />
        <Route path="/assessment_result/:user" element={<Result />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/scholarship" element={<ScholarshipPage />} />
        <Route path="/executive" element={<Executive/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/kenya" element={<Kenya/>} />
        <Route path="/lekki" element={<Lekki/>} />
        <Route path="/anambra" element={<Anambra/>} />
        <Route path="/ikeja" element={<Ikeja/>} />
        <Route path="/ibadan" element={<Ibadan/>} />
        <Route path="/abuja" element={<Abuja/>} />
        <Route path="/growthpm" element={<Growth/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/temp/careerfair' element={<Career/>} />
        <Route path="/technicalpm" element={<Technical/>} />
        <Route path="/programsad" element={<ProgramsAd/>} />
        <Route path="/upskill" element={<Upskill/>} />
        <Route path="/projectmanagement" element={<PMP/>} />
        <Route path="/international" element={<Diaspora/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/physical" element={<Physical/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <ChatbotContainer/>
    </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
