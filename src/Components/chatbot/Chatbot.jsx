import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import svgPaths from "../imports/svg-ow3xs78chk";
import imgAvatar from "../../assets/ea.png";
import { UserDetailsForm } from "./UserDetailsForm";
import { authUtils, submitUserDetails, sendQuestion } from "../../Utils/auth";



const IconContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 21.635px;
  height: 21.635px;
`;

const IconSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  background-color: #003ad4;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 21px 33px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 768px) {
    border-radius: 10px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  gap: 11.539px;
  align-items: center;
`;

const HeaderTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
  font-size: 23.077px;
  white-space: nowrap;
  color: white;
`;

const CloseButton = styled.button`
  color: white;
  border-radius: 9999px;
  padding: 4px;
  transition: background-color 0.2s;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const WelcomeMessageBox = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 14px 15px;
  border-radius: 10px;
  border: 0.5px solid #dedede;
`;

const WelcomeText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: italic;
  line-height: normal;
  color: #4b4b4b;
  font-size: 14px;
`;

const QuickActionBtn = styled.button`
  background-color: #dbe5ff;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 24px;
  border-radius: 5px;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #c5d4ff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuickActionText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  color: #474747;
  font-size: 14px;
`;

const LoadingBox = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 14px 15px;
  border-radius: 10px;
  border: 0.5px solid #dedede;
`;

const LoadingDots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LoadingDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #003ad4;
  border-radius: 9999px;
  animation: bounce 1s infinite;
  animation-delay: ${props => props.delay}ms;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const LoadingText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: italic;
  line-height: normal;
  color: #4b4b4b;
  font-size: 14px;
  margin-left: 8px;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 40px;
`;

const AvatarImageWrapper = styled.div`
  height: 38px;
  overflow: clip;
  position: relative;
  border-radius: 6px;
  flex-shrink: 0;
  width: 100%;
`;

const AvatarBackground = styled.div`
  position: absolute;
  background-color: #d9d9d9;
  height: 38px;
  left: 0;
  top: 0;
  width: 40px;
`;

const AvatarImageContainer = styled.div`
  position: absolute;
  height: 199px;
  left: calc(50% - 1px);
  top: -14px;
  transform: translateX(-50%);
  width: 112px;
`;

const AvatarImage = styled.img`
  position: absolute;
  inset: 0;
  max-width: none;
  object-fit: cover;
  object-position: 50% 50%;
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

const AvatarLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 20px;
  font-style: normal;
  position: relative;
  flex-shrink: 0;
  font-size: 14px;
  text-align: center;
  color: #737373;
  letter-spacing: 3.22px;
  width: 100%;
`;

const UserMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UserMessageBubble = styled.div`
  background-color: #1750e8;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 24px;
  border-radius: 5px;
`;

const UserMessageText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  font-size: 14px;
  color: white;
  white-space: pre-wrap;
`;

const BotMessageContainer = styled.div`
  display: flex;
  gap: 11px;
  align-items: flex-start;
  position: relative;
  flex-shrink: 0;
  width: 100%;
`;

const BotMessageBubble = styled.div`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 14px 15px;
  border-radius: 10px;
  border: 0.5px solid #dedede;
  flex: 1;
`;

const BotMessageText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-style: italic;
  line-height: 20px;
  color: #4b4b4b;
  font-size: 12px;
  white-space: pre-wrap;
`;

const FollowUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
`;

const FollowUpButton = styled.button`
  background-color: #dbe5ff;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 24px;
  border-radius: 5px;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c5d4ff;
  }
`;

const FollowUpText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  color: #474747;
  font-size: 14px;
  white-space: pre-wrap;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
`;

const ChatbotMainContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: #f0f0f0;
  box-shadow: 0px 21px 24.9px 0px rgba(0, 0, 0, 0.15);
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) {
    inset: auto;
    right: 24px;
    bottom: 24px;
    top: auto;
    left: auto;
    width: 400px;
    height: 600px;
    border-radius: 24px;
  }
`;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WelcomeActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FollowUpSection = styled.div`
  padding-top: 16px;
`;

function SimpleIconsChatbot() {
  return (
    <IconContainer data-name="simple-icons:chatbot">
      <IconSvg fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_91)" id="simple-icons:chatbot">
          <path d={svgPaths.p14056200} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_91">
            <rect fill="white" height="21.6346" width="21.6346" />
          </clipPath>
        </defs>
      </IconSvg>
    </IconContainer>
  );
}

function ChatHeader({ onClose }) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <SimpleIconsChatbot />
        <HeaderTitle>
          Enoverlab Assistant
        </HeaderTitle>
      </HeaderContent>
      <CloseButton
        onClick={onClose}
        aria-label="Close chat"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </CloseButton>
    </HeaderContainer>
  );
}

function WelcomeMessage() {
  return (
    <WelcomeMessageBox>
      <WelcomeText>
        Hi, I'm Blessing, Enoverlab Assistant
        <br />
        <br />
        I am here to give information you about Enoverlab and our training programs
        <br />
        <br />
        Choose what you need more information about
      </WelcomeText>
    </WelcomeMessageBox>
  );
}

function QuickActionButton({ children, onClick, disabled }) {
  return (
    <QuickActionBtn
      onClick={onClick}
      disabled={disabled}
    >
      <QuickActionText>
        {children}
      </QuickActionText>
    </QuickActionBtn>
  );
}

function LoadingMessage() {
  return (
    <LoadingBox>
      <LoadingDots>
        <LoadingDot delay={0} />
        <LoadingDot delay={150} />
        <LoadingDot delay={300} />
        <LoadingText>
          Thinking...
        </LoadingText>
      </LoadingDots>
    </LoadingBox>
  );
}

function AvatarIcon() {
  return (
    <AvatarContainer>
      <AvatarImageWrapper>
        <AvatarBackground />
        <AvatarImageContainer>
          <AvatarImage 
            alt="" 
            src={imgAvatar} 
          />
        </AvatarImageContainer>
      </AvatarImageWrapper>
      <AvatarLabel>
        EA
      </AvatarLabel>
    </AvatarContainer>
  );
}

function MessageBubble({ message }) {
  const isUser = message.type === "user";
  
  if (isUser) {
    return (
      <UserMessageContainer>
        <UserMessageBubble>
          <UserMessageText>
            {message.content}
          </UserMessageText>
        </UserMessageBubble>
      </UserMessageContainer>
    );
  }

  return (
    <BotMessageContainer>
      <AvatarIcon />
      <BotMessageBubble>
        <BotMessageText>
          {message.content}
        </BotMessageText>
      </BotMessageBubble>
    </BotMessageContainer>
  );
}

function FollowUpQuestions({ questions, onQuestionClick }) {
  return (
    <FollowUpContainer>
      {questions.map((question, index) => (
        <FollowUpButton
          key={index}
          onClick={() => onQuestionClick(question)}
        >
          <FollowUpText>
            {question}
          </FollowUpText>
        </FollowUpButton>
      ))}
    </FollowUpContainer>
  );
}

export function Chatbot({ isOpen, onClose }) {
  const [currentView, setCurrentView] = useState("welcome");
  const [messages, setMessages] = useState([]);
  const [pendingQuestion, setPendingQuestion] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentFollowUps, setCurrentFollowUps] = useState([]);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, currentView]);

  // Check authentication on mount
  useEffect(() => {
    if (isOpen && !authUtils.isAuthenticated()) {
      setCurrentView("welcome");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleQuestionClick = async (question) => {
    // Check if user is authenticated
    if (!authUtils.isAuthenticated()) {
      // Store the question and show auth form
      setPendingQuestion(question);
      setCurrentView("needsAuth");
      return;
    }

    // User is authenticated, send question
    await handleSendQuestion(question);
  };

  const handleSendQuestion = async (question) => {
    const token = authUtils.getToken();
    if (!token) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: question }]);
    setCurrentView("loading");
    setCurrentFollowUps([]);

    try {
      const response = await sendQuestion(question, token);

      if (!response.tokenValid) {
        // Token is invalid, clear it and show auth form
        authUtils.removeToken();
        setPendingQuestion(question);
        setCurrentView("needsAuth");
        setMessages([]); // Clear messages
        return;
      }

      // Add bot response
      setMessages((prev) => [
        ...prev, 
        { 
          type: "bot", 
          content: response.response,
          followUpQuestions: response.followUpQuestions 
        }
      ]);
      
      // Set follow-up questions
      if (response.followUpQuestions && response.followUpQuestions.length > 0) {
        setCurrentFollowUps(response.followUpQuestions);
      }
      
      setCurrentView("response");
    } catch (error) {
      console.error("Error sending question:", error);
      setMessages((prev) => [
        ...prev,
        { 
          type: "bot", 
          content: "Sorry, I encountered an error. Please try again later." 
        },
      ]);
      setCurrentView("response");
    }
  };

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await submitUserDetails(data);

      if (response.success) {
        // Store token
        authUtils.setToken(response.token);

        // If there's a pending question, send it now
        if (pendingQuestion) {
          await handleSendQuestion(pendingQuestion);
          setPendingQuestion(null);
        } else {
          // No pending question, go back to welcome
          setCurrentView("welcome");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop - clicking outside closes modal */}
      <Backdrop onClick={onClose} />

      {/* Chatbot Container */}
      <ChatbotMainContainer onClick={(e) => e.stopPropagation()}>
        {currentView === "needsAuth" ? (
          <UserDetailsForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} onClose={onClose} />
        ) : (
          <>
            <ChatHeader onClose={onClose} />

            <ChatContent ref={scrollRef}>
              {currentView === "welcome" && (
                <>
                  <WelcomeMessage />

                  <WelcomeActionsContainer>
                    <QuickActionButton onClick={() => handleQuestionClick("Product Management training")}>
                      <p style={{ marginBottom: 0 }}>Can I learn more about your</p>
                      <p>Product Management training?</p>
                    </QuickActionButton>

                    <QuickActionButton onClick={() => handleQuestionClick("Training requirements")}>
                      <p style={{ marginBottom: 0 }}>What are the requirements</p>
                      <p>to take the training?</p>
                    </QuickActionButton>

                    <QuickActionButton onClick={() => handleQuestionClick("Tuition fees")}>
                      <p style={{ marginBottom: 0 }}>How much is the</p>
                      <p>training tuition fees?</p>
                    </QuickActionButton>
                  </WelcomeActionsContainer>
                </>
              )}

              {(currentView === "loading" || currentView === "response") && (
                <>
                  <MessagesContainer>
                    {messages.map((message, index) => (
                      <MessageBubble key={index} message={message} />
                    ))}
                    {currentView === "loading" && <LoadingMessage />}
                  </MessagesContainer>

                  {currentView === "response" && currentFollowUps.length > 0 && (
                    <FollowUpSection>
                      <FollowUpQuestions 
                        questions={currentFollowUps} 
                        onQuestionClick={handleQuestionClick}
                      />
                    </FollowUpSection>
                  )}
                </>
              )}
            </ChatContent>
          </>
        )}
      </ChatbotMainContainer>
    </>
  );
}
