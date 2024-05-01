import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import { theme } from "../../Utils/Theme";
import { H3, H4 } from "../../Utils/styled/Typograpyhy";

const Timer = () => {
    const [expiryTime, setExpiryTime] = useState("3 mar 2023 23:55:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: "",
        countdownHours: "",
        countdownlMinutes: "",
        countdownSeconds: "",
        });
    
        const countdownTimer = () => {
              const timeInterval = setInterval(() => {
              const countdownDateTime = new Date(expiryTime).getTime();
              const currentTime = new Date().getTime();
              const remainingDayTime = countdownDateTime - currentTime;
              const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
              const totalHours = Math.floor(
                (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
              );
              const totalMinutes = Math.floor(
                (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
              );
              const totalSeconds = Math.floor(
                (remainingDayTime % (1000 * 60)) / 1000
              );
          
              const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds,
              };
          
              setCountdownTime(runningCountdownTime);
          
              if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
              }
            }, 1000);
          };

          useEffect(() => {
            countdownTimer();
            });
        

  return (
    <StyledTimer>
      <div className="timer-container">
        <div className="timer-title">
          <H3 color={theme.color.light} textAlign={"center"} fontSize={"2rem"}>
            DISCOUNT ENDS 
          </H3>
        </div>
        <div className="timer">
          <div className="timer-box">
            <H3
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"2rem"}
            >
              {countdownTime.countdownDays}
            </H3>
            <H4
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"1rem"}
                mobileFontSize={"0.8rem"}
            >
              DAYS
            </H4>
          </div>
          <div className="timer-box">
            <H3
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"2rem"}
            >
             {countdownTime.countdownHours}
            </H3>
            <H4
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"1rem"}
                mobileFontSize={"0.8rem"}
            >
              HOURS
            </H4>
          </div>
          <div className="timer-box">
            <H3
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"2rem"}
            >
              {countdownTime.countdownMinutes}
            </H3>
            <H4
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"1rem"}
              mobileFontSize={"0.8rem"}
            >
                MINUTES
            </H4>
          </div>
          <div className="timer-box">
            <H3
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"2rem"}
            >
              {countdownTime.countdownSeconds}
            </H3>
            <H4
              color={theme.color.light}
              textAlign={"left"}
              fontSize={"1rem"}
              mobileFontSize={"0.8rem"}
            >
              SECONDS
            </H4>
          </div>
        </div>
      </div>
    </StyledTimer>
  );
};

export default Timer;

const pulse = keyframes`
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.9);
    }
    /* from{
        transform: scale(1);
    }
    to{
        transform: scale(1.1);
    } */
`

const StyledTimer = styled.div` 
    .timer-container {
        position: relative;
        padding: 1rem 5%;
        background: ${theme.color.primary};
        border: 1px solid ${theme.color.dark};
        animation:  ${pulse} 2s ease-in-out infinite;

        .timer-title {
            margin-bottom: 1rem;
        }
        .timer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            column-gap: 2rem;
            @media (max-width: 768px) {
                    column-gap: 1rem;
                }  
            .timer-box {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
               
              
                
            }
        } 
    }
`;
