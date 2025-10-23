import styled from "styled-components";
import svgPaths from "../imports/svg-ow3xs78chk";


const WidgetButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #003ad4;
  padding: 16px;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0033bb;
  }
`;

const IconContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const IconSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;

function SimpleIconsChatbot() {
  return (
    <IconContainer data-name="simple-icons:chatbot">
      <IconSvg fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_widget)" id="simple-icons:chatbot">
          <path d={svgPaths.p14056200} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_widget">
            <rect fill="white" height="21.6346" width="21.6346" />
          </clipPath>
        </defs>
      </IconSvg>
    </IconContainer>
  );
}

export function ChatbotWidget({ onClick, isOpen }) {
  if (isOpen) return null;

  return (
    <WidgetButton
      onClick={onClick}
      aria-label="Open Enoverlab Assistant"
    >
      <SimpleIconsChatbot />
    </WidgetButton>
  );
}
