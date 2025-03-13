import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cat from "../assets/icon/cat.svg"

const Container = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const TextSection = styled.div`
  max-width: 400px;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #374151;
`;

const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  margin-top: 2rem;
  padding: 2rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border: 1px solid #1d4ed8;
  background-color: #1d4ed8;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: #1e40af;
    background-color : #f2f2f2;
  }
`;

const ImageSection = styled.div`
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
  }
`;

const NotFound = ({ headline }) => {
  return (
    <Container>
      <ContentWrapper>
        <TextSection>
          <Headline>{headline}</Headline>
          <Message>But don't worry, you can find plenty of other things on our homepage.</Message>
          <StyledLink to="/">Back to homepage</StyledLink>
        </TextSection>
        <ImageSection>
          <img src={cat} alt="catty" />
        </ImageSection>
      </ContentWrapper>
    </Container>
  );
};

export default NotFound;