import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  background-color: ${props => props.bg};
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  color: ${(props) => props.theme.color.bodyText};
  img {
    width: 140px;
  }
  @media (min-width: 1024px) {
    padding: 4rem 9.6rem 0px 9.6rem;
    img {
      width: 225px;
    }
  }
`;

export const Toggleview = styled.div`
  display: ${(props) => (props.display ? "none" : "block")};
  @media (min-width: 1024px) {
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

export const TopNavbabies = styled.nav`
  display: none;
  font-size: 1.33vw;
  cursor: pointer;
  a {
    &:hover {
      color: #0088ff;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    gap: 60px;
    .dropdown {
      position: relative;
      display: flex;
      img {
        width: 20px;
      }
      .addLinks {
        display : none;
        border: 1px solid;
        position: absolute;
        background: #fff;
        padding: 15px 4.5rem;
        border-radius: 5px;
        width: 320px;
        top: 35px;
        left: -15px;
        z-index: 30;
        header {
          margin: 2.5rem 0;
          font-weight: 700;
        }
        main {
          font-size: 1.6rem;
          font-weight: 400;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
      &:hover{
        .addLinks{
          display: block;
        }
      }
    }
  }
`;
export const SideBarBabies = styled(TopNavbabies)`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 400;
  gap: 25px;
  .addLinks {
    padding-left: 15px;
    header {
      font-size: 1.5rem;
      margin: 2rem 0;
      font-weight: 700;
    }
    main {
      font-size: 1.2rem;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  .dropdown {
    position: relative;
    display: flex;
    align-items: center;
    cursor:pointer ;
    }
    img {
      width: 20px;
    }
`;

export const FramerSidebar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
export const FramerSidebarPanel = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 15px;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 50;
  width: 250px;
  height: 100%;
  max-width: 250px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.quaternary};
  border-left: 2px solid ${(props) => props.theme.color.tertiary};
`;
