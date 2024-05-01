import styled from "styled-components";

export const StyledHeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 32px 32px 32px 32px;
  h1 {
    font-size: clamp(2.5rem,7.47vw,3.2rem);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.64px;
    line-height: 50px;
    color: var(--Title-Text);
  }
  span {
    color: #fff;
    background: #8c8cff;
    border-radius: 15px;
    padding:5px;
  }
  button {
    margin: 32px 0px;
  }

  @media (min-width: 1024px) {
    display: block;
    text-align: left;
    padding: 64px 0px 40px 96px;
    h1 {
      font-size: clamp(5rem,4.44vw,6.4rem);
      font-style: normal;
      font-weight: 700;
      line-height: 86px; /* 134.375% */
      letter-spacing: 3.2px;
    }
    button {
      display: none;
    }
    span {
    color: #fff;
    background: #8c8cff;
    border-radius: 30px;
  }
  }
`;

export const StyledHeroBody = styled.div`
  position: relative;
  .heroImg{
    width: 100%;
    /* height: clamp(200px,25vw,300px) ; */
  }
  .text{
    position: absolute;
    bottom: 0;
    right: clamp(3.5rem,9.34vw,4rem);
    display: flex;
    color: white;
    font-weight: 700;
    h2{
      font-size: 5.607vw;
      
    }
    img{
      padding: 0 5px;
    }
    span{
      font-size: 2.803vw;
    }

  }
  @media (min-width: 1024px) {
    .heroImg{
    width: 100%;
    height: auto;
  }

    .text{
      right: clamp(8rem,6.25vw,9rem);
      bottom: 10px;
    h2{
      font-size:3.17vw;
      letter-spacing: 1.92px;

    }
    span{
      font-size: 1.322vw;
      letter-spacing: 0.8px;

    }
  }
  }
`

export const StyledHeroFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--Body-Text);
  font-weight: 400;
  line-height: 30px;
  padding: 3.2rem 1.5rem 3.2rem 1.5rem;
  section {
    display: none;
    p {
      font-size: clamp(1.3rem,4.67vw,2rem);
      font-style: normal;
    }
  }
  div {
    display: flex;
    align-items:center ;
    gap: 12px;
    p {
      font-size: 1.4rem;
      font-style: normal;
    }
  }
  @media (min-width: 1024px) {
    padding: 57px 84px 124px 96px;
    gap: 50px;
    section {
      display: flex;
      align-items: center;
      p {
      font-size: clamp(1.5rem,1.3888vw,2rem);
      font-style: normal;
      }
    }
    div{
        p {
            font-size: clamp(1rem,1.111vw,1.6rem);
            font-style: normal;
          }
    }
  }
`;
