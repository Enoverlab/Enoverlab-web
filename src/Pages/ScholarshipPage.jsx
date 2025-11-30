import styled from 'styled-components';
import bg from "../assets/icon/bg.png";
import groupSmiling from "../assets/icon/group-smiling.png"
import gradRight from "../assets/icon/grad-right.png"
import gradLeft  from "../assets/icon/grad-left.png"
import sponsor from "../assets/icon/sponsor.png"
import criteria from "../assets/icon/criteria.png"
import svgPaths from "../Components/imports/svg-bsrpxiziyw"
import { useState } from 'react';
import LoadingScreen2 from '../Components/LoadingScreen2';
import Header from '../Components/Header';

const PageContainer = styled.div`
  background: #fff;
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    background: #f8f8f8;
  }
`;


const HeroWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) {
    max-width: 1340px;
    margin: 45px auto 0;
    background: #fff;
    border-radius: 32px;
    padding: 130px 54px;
    overflow: hidden;
  }
`;

const HeroSection = styled.section`
  padding: 96px 16px 76px;
  display: flex;
  flex-direction: column;
  gap: 76px;

  @media (min-width: 768px) {
    padding: 0;
    gap: 150px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 790px;
    margin: 0 auto;
    gap: 43px;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: normal;
  margin: 0;
  color: #1e1e1e;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const TitleHighlight = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #003ad4;
`;

const DescriptionMobile = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  margin: 0;
  color: #1e1e1e;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DescriptionDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: normal;
    color: #1e1e1e;

    p {
      margin: 0;
    }
  }
`;

const ApplyButton = styled.button`
  background: #003ad4;
  border: none;
  border-radius: 9px;
  padding: 10px;
  height: 53px;
  width: 218px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  color: #fff;
  transition: background 0.3s ease;

  &:hover {
    background: #0031b0;
  }

  &:active {
    background: #002890;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
`;

const HeroImageContainer = styled.div`
  background: #e9e9e9;
  height: 420px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    height: 635px;
    max-width: 1240px;
    margin: 0 auto;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 50%;
  top: -299px;
  transform: translateX(-50%);
  width: 1100px;
  height: 733px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 1762px;
    height: 1175px;
    top: -526px;
    left: calc(50% + 16px);
  }
`;

const StudentsImage = styled.img`
  position: absolute;
  left: 0;
  top: 72px;
  width: 521px;
  height: 347px;
  object-fit: cover;

  @media (min-width: 768px) {
    left: -6px;
    top: 0;
    width: 1206px;
    height: 804px;
  }
`;

const PoweredBySection = styled.section`
  background: #060043;
  box-shadow: 0px 4px 23.9px 0px rgba(0, 0, 0, 0.25);
  padding: 36px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -46px;

  @media (min-width: 768px) {
    background: #fff;
    border-radius: 20px;
    padding: 36px 20px;
    margin-top: -280px;
    max-width: 1088px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 10;
  }
`;

const PoweredByText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  margin: 0;
  max-width: 359px;

  @media (min-width: 768px) {
    font-weight: 600;
    font-size: 28px;
    line-height: normal;
    color: #080069;
    max-width: 100%;
  }
`;

const CriteriaSection = styled.section`
  padding: 60px 16px 0;

  @media (min-width: 768px) {
    padding: 120px 50px 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: normal;
  color: #1e1e1e;
  text-align: center;
  margin: 0 0 40px;

  @media (min-width: 768px) {
    font-size: 32px;
    display: none;
  }
`;

const CriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (min-width: 768px) {
    background: rgba(3, 169, 244, 0.03);
    border-radius: 20px;
    padding: 83px 61px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const CriteriaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (min-width: 768px) {
    gap: 30px;
    flex: 1;
  }
`;

const CriteriaTitleDesktop = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: normal;
    color: #1e1e1e;
    margin: 0;
  }
`;

const CriteriaListMobile = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 0;
  color: #1e1e1e;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: disc;
    margin-left: 24px;
    margin-bottom: 0;

    span {
      line-height: 1.71;
    }
  }

  p {
    line-height: 1.71;
    margin: 0;
    white-space: pre-wrap;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const CriteriaListDesktop = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 0;
    color: #1e1e1e;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      list-style: disc;
      margin-left: 36px;
      margin-bottom: 0;

      span {
        line-height: 1.71;
      }
    }
  }
`;

const WarningText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: #9f1111;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 39px;
  }
`;

const CriteriaImageContainer = styled.div`
  background: #cecece;
  height: 367px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  width: 100%;
  order: -1;

  @media (min-width: 768px) {
    height: 591px;
    width: 491px;
    flex-shrink: 0;
    order: 0;
  }
`;

const CriteriaImage = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 550px;
  height: 367px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 950px;
    height: 634px;
    left: calc(50% - 23.5px);
  }
`;

const SponsorsSection = styled.section`
  padding: 80px 16px 0;

  @media (min-width: 768px) {
    padding: 120px 94px 0;
  }
`;

const SponsorsImageContainer = styled.div`
  background: #cecece;
  height: 150px;
  overflow: hidden;
  border-radius: 4.483px;
  position: relative;
  width: 100%;
  margin-bottom: 26px;

  @media (min-width: 768px) {
    height: 348px;
    border-radius: 13px;
    margin-bottom: 44px;
  }
`;

const SponsorsImage = styled.img`
  position: absolute;
  left: 2px;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;

  @media (min-width: 768px) {
    left: 50%;
    top : 0;
    transform: translateX(-50%);
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

const SponsorsText = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: normal;
  color: #1e1e1e;
  text-align: justify;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  p {
    margin: 0;
  }
`;

const BottomApplySection = styled.section`
  padding: 80px 16px 0;

  @media (min-width: 768px) {
    padding: 80px 88px 0;
  }
`;

const BottomApplyButton = styled.button`
  background: #003ad4;
  border: none;
  border-radius: 9px;
  padding: 10px;
  height: 44px;
  width: 243px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: #fff;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    height: 53px;
    width: 266px;
    font-size: 16px;
  }

  &:hover {
    background: #0031b0;
  }

  &:active {
    background: #002890;
  }
`;

const ShareSection = styled.section`
  padding: 80px 16px;

  @media (min-width: 768px) {
    padding: 80px 88px;
  }
`;

const ShareText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  color: #1e1e1e;
  margin: 0 0 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const DecorativeHat1 = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 250px;
    right: 30px;
    width: 340.737px;
    pointer-events: none;
    z-index: 5;
    transform: rotate(10.189deg);
  }
`;

const DecorativeHat2 = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 350px;
    left: 80px;
    width: 190.737px;
    pointer-events: none;
    z-index: 5;
    transform: rotate(10.189deg);
  }
`;


export default function ScholarshipPage() {

  const [isLoading, setIsLoading] = useState(true)
  
    setTimeout(()=>{
      setIsLoading(false)
    },8000)
  return (
    <div>
      {isLoading ? <LoadingScreen2 />  : 
      <div>
        <Header />
        <PageContainer>
          <HeroWrapper>
            <DecorativeHat1 src={gradRight}>
            </DecorativeHat1>

            <DecorativeHat2 src={gradLeft}>
            </DecorativeHat2>

            <HeroSection>
              <HeroContent>
                <HeroText>
                  <Title>
                    <TitleHighlight>50% Scholarship</TitleHighlight> for Nigerian Undergraduates
                  </Title>
                  <DescriptionMobile>
                    To learn Product Management skills professionally and become a Product Manager even as an undergraduates
                  </DescriptionMobile>
                  <DescriptionDesktop>
                    <p>To learn Product Management skills professionally and</p>
                    <p>become a Product Manager even as an undergraduates</p>
                  </DescriptionDesktop>
                </HeroText>
                <ApplyButton>Apply Here</ApplyButton>
              </HeroContent>

              <HeroImageWrapper>
                <HeroImageContainer>
                  <BackgroundImage src={bg} alt="" />
                  <StudentsImage src={groupSmiling} alt="" />
                </HeroImageContainer>
              </HeroImageWrapper>
            </HeroSection>
          </HeroWrapper>

          <PoweredBySection>
            <PoweredByText>
              This initiative is powered by Loba Foundation in partnership with Enoverlab
            </PoweredByText>
          </PoweredBySection>

          <CriteriaSection>
            <SectionTitle>Here are the key criterias to apply</SectionTitle>
            
            <CriteriaContainer>

              <CriteriaContent>
                <CriteriaTitleDesktop>Here are the key criterias to apply</CriteriaTitleDesktop>
                
                <CriteriaListMobile>
                  <ul>
                    <li><span>You must be ready to learn</span></li>
                  </ul>
                  <p>      Product Management </p>
                  <ul>
                    <li><span>You must have a smartphone and/or a laptop</span></li>
                    <li><span>You must be ready to dedicate at least</span></li>
                  </ul>
                  <p>      4 hours every week for 12 weeks</p>
                  <ul>
                    <li><span>You must have a valid school ID with</span></li>
                  </ul>
                  <p>      any University in Nigeria</p>
                  <ul>
                    <li><span>The ID car must show your course of study, department, matric no and card expiry</span></li>
                  </ul>
                  <p>      or validity date </p>
                  <ul>
                    <li><span>You must be able to cover the remaining</span></li>
                  </ul>
                  <p>      50% of your tuition fee</p>
                </CriteriaListMobile>

                <CriteriaListDesktop>
                  <li><span>You must be ready to learn product management </span></li>
                  <li><span>You must have a smartphone and/or a laptop</span></li>
                  <li><span>You must be ready to dedicate atleast 4 hours every week for 12 weeks</span></li>
                  <li><span>You must have a valid school ID with any university in Nigeria</span></li>
                  <li><span>The ID car must show your course of study, department, matric no and card expiry or validity date </span></li>
                  <li><span>You must be able to cover the remaining 50% of your tuition fee</span></li>
                </CriteriaListDesktop>
                
                <WarningText>DO NOT APPLY IF YOU DON'T MEET THIS CRITERIA'S ABOVE!!!</WarningText>
              </CriteriaContent>

              <CriteriaImageContainer>
                <CriteriaImage src={criteria} alt="" />
              </CriteriaImageContainer>
            </CriteriaContainer>
          </CriteriaSection>

          <SponsorsSection>
            <SectionTitle>About The Sponsors</SectionTitle>
            
            <SponsorsImageContainer>
              <SponsorsImage src={sponsor} alt="" />
            </SponsorsImageContainer>
            
            <SponsorsText>
              <p>Loba Foundation is an NGO that provides financial support to empower young people between age 16 - 25 with real-world technical skills, soft skills, and leadership skills to transform their communities, Nigeria, and the world at large.</p>
              <p>&nbsp;</p>
              <p>Loba Foundation is passionate about helping young undergraduates build capacity early, become independent, and start making an impact in the society even before graduation.</p>
              <p>&nbsp;</p>
              <p>The vision of Loba Foundation is to help build the incoming generation today. </p>
              <p>&nbsp;</p>
              <p>Enoverlab is a training institute that provides product management training to individuals and corporate organisations.</p>
              <p>Enoverlab has trained over 1,000 people to become skilled product managers and over 70% of them are working for different organisations across the globe.</p>
              <p>&nbsp;</p>
              <p>The vision of Enoverlab to transform Africa one talent at a time is at the driving force of everything Enoverlab is doing.</p>
              <p>&nbsp;</p>
              <p>The strategic partnership between Loba Foundation and Enoverlab is going to be instrumental in helping thousands of Nigeria students become empowered with skills that will transform their lives, their communities, Nigeria, and the world at large.</p>
              <p>&nbsp;</p>
              <p>The goal of this partnership is to empower 1,000,000 Nigerian students over the next 20 years! </p>
            </SponsorsText>
          </SponsorsSection>

          <BottomApplySection>
            <BottomApplyButton>Apply For the Scholarship Here</BottomApplyButton>
          </BottomApplySection>

          <ShareSection>
            <ShareText>Share this with a friend</ShareText>
            <SocialIcons>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1f8bfe00} fill="black" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3fb9f800} fill="black" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3afc9700} fill="black" />
                  <path d={svgPaths.p5720600} fill="black" />
                  <path d={svgPaths.p2ae515f0} fill="black" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p22678780} fill="black" fillRule="evenodd" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3fe8a800} fill="black" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c53eb80} fill="black" />
                </svg>
              </SocialIcon>
            </SocialIcons>
          </ShareSection>
        </PageContainer>
      </div>
      
      }
    </div>
    
  );
}