import styled from "styled-components";
import { theme } from "../Theme";

const fontSize = theme.fontSize;
const color = theme.color;

export const H1 = styled.h1`
  font-size: ${(props) => props.fs || "8.411vw"};
  color: ${(props) => props.color || color.light};
  font-weight: ${(props) => props.fw || 700};
  line-height: ${(props) => props.lh};
  text-align: ${(props) => props.tA};
  margin: ${(props) => props.m || "0"};
  padding: ${(props) => props.p || "0"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  @media (min-width: 700px) {
    line-height: ${(props) => props.mdlh || "normal"};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || "4.32vw"};
    line-height: ${(props) => props.mdlh || "normal"};
    padding-bottom: ${(props) => props.pmdb || "0"};
    width: ${(props) => props.mdwidth};
  }
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.fs || fontSize.xl};
  color: ${(props) => props.color || color.light};
  width: ${(props) => props.w};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  font-weight: ${(props) => props.fw || 700};
  text-align: ${(props) => props.tA};
  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  padding: ${(props) => props.padding || "0"};
  line-height: ${(props) => props.lh};
  padding-top: ${(props) => props.t || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || "2.380vw"};
    text-align: ${(props) => props.mdtA};
    line-height: ${(props) => props.mdlh || "normal"};
    width: ${(props) => props.mdwidth};
    color: ${(props) => props.mdcolor || props.color};
    margin-bottom: ${(props) => props.mdmb || props.mb};
    padding-bottom: ${(props) => props.pmdb || "0"};
  }
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.fs};
  color: ${(props) => props.color || color.light};
  font-weight: ${(props) => props.fw || "700"};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
  text-align: ${(props) => props.tA};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  padding: ${(props) => props.padding || "0"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || fontSize.xl};
    padding-top: ${(props) => props.mdpt || "0"};
    line-height: ${(props) => props.mdlh};
    padding-bottom: ${(props) => props.mdpb || "0"};
    margin-bottom: ${(props) => props.mdmb || "0"};
    width: ${(props) => props.mdwidth};
  }
`;
export const H4 = styled.h4`
  font-size: ${(props) => props.fs || "1.8rem"};
  color: ${(props) => props.color || color.light};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  font-weight: ${(props) => props.fw || "400"};
  text-align: ${(props) => props.tA};
  line-height: ${(props) => props.lh || "normal"};
  margin: ${(props) => props.margin || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  padding: ${(props) => props.p || "0"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  width: ${(props) => props.width};
  span {
    font-weight: 500;
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || "1.322vw"};
    text-align: ${(props) => props.mdtA};
    line-height: ${(props) => props.mdlh || props.lh};
    padding-bottom: ${(props) => props.mdpb || "0"};
    padding-top: ${(props) => props.mdpt || "0"};
    width: ${(props) => props.mdwidth};
  }
`;

export const P = styled.p`
  font-size: ${(props) => props.fs || fontSize.sm};
  color: ${(props) => props.color || color.light};
  font-weight: ${(props) => props.fw || 400};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  text-align: ${(props) => props.tA};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || fontSize.base};
    line-height: ${(props) => props.mdlh};
    font-weight: ${(props) => props.mdfw || props.fw};
    padding-bottom: ${(props) => props.pb || props.pmdb};
  }
`;

export const LI = styled.li`
font-size: ${(props) => props.fs || fontSize.sm};
  color: ${(props) => props.color || color.light};
  font-weight: ${(props) => props.fw || 400};
  display: ${(props) => props.display} ;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  text-align: ${(props) => props.tA};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  padding-top: ${(props) => props.pt || "0"};
  padding-bottom: ${(props) => props.pb || "0"};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.mdfs || fontSize.base};
    line-height: ${(props) => props.mdlh};
    font-weight: ${(props) => props.mdfw || props.fw};
    padding-bottom: ${(props) => props.pb || props.pmdb};
  }
`
