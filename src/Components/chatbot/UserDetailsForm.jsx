import { useState } from "react";
import styled from "styled-components";
import svgPaths from "../imports/svg-vx4mn3ja2s";


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

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

const HeaderTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
  font-size: 23.077px;
  white-space: nowrap;
  color: white;
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

const StyledForm = styled.form`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 8px;
`;

const StyledInput = styled.input`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 24px;
  border-radius: 6px;
  border: 0.5px solid rgba(0, 58, 212, 0);
  color: #474747;
  font-size: 16px;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    border-color: #003ad4;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  background-color: #0030af;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #002a9a;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function SimpleIconsChatbot() {
  return (
    <IconContainer data-name="simple-icons:chatbot">
      <IconSvg fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_form_91)" id="simple-icons:chatbot">
          <path d={svgPaths.p14056200} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_form_91">
            <rect fill="white" height="21.6346" width="21.6346" />
          </clipPath>
        </defs>
      </IconSvg>
    </IconContainer>
  );
}

function FormHeader({ onClose }) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <SimpleIconsChatbot />
        <HeaderTitle>
          Enoverlab Assistant
        </HeaderTitle>
      </HeaderContent>
      {onClose && (
        <CloseButton
          onClick={onClose}
          aria-label="Close form"
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
      )}
    </HeaderContainer>
  );
}

function WelcomeMessage() {
  return (
    <WelcomeMessageBox>
      <WelcomeText>
        Kindly share a few details about you — this will help us give you the most helpful response to your questions and support you better..
      </WelcomeText>
    </WelcomeMessageBox>
  );
}

export function UserDetailsForm({ onSubmit, isSubmitting, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer>
      <FormHeader onClose={onClose} />

      <StyledForm onSubmit={handleSubmit}>
        <WelcomeMessage />

        <InputsContainer>
          <StyledInput
            type="text"
            placeholder="Full name:"
            value={formData.fullName}
            onChange={handleChange("fullName")}
            required
            disabled={isSubmitting}
          />

          <StyledInput
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange("email")}
            required
            disabled={isSubmitting}
          />

          <StyledInput
            type="tel"
            placeholder="Whatsapp no:"
            value={formData.whatsapp}
            onChange={handleChange("whatsapp")}
            required
            disabled={isSubmitting}
          />

          <StyledInput
            type="tel"
            placeholder="Phone no:"
            value={formData.phone}
            onChange={handleChange("phone")}
            required
            disabled={isSubmitting}
          />
        </InputsContainer>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}
