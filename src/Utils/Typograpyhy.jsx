import styled from "styled-components";
import { theme } from "./Theme";

const fontSize = theme.fontSize
const color = theme.color

export const H1 = styled.h1`
    font-size: ${fontSize.xxl};
    color: ${props => props.color || color.primary};
    font-weight: ${props => props.fontWeight || fontSize.xxl};
    text-align: ${props => props.textAlign || "center"};
    line-height: 5.75rem;
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    padding-top: ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    @media (max-width: 768px) {
        font-size: ${props => props.mobileFontSize || fontSize.xl};
        line-height: ${props => props.mobileLineHeight || "3rem"};
    }
    span{
        color: ${color.primary};
    }
`

export const H2 = styled.h2`
    font-size: ${fontSize.xl};
    color: ${props => props.color || color.primary};
    font-weight: ${props => props.fontWeight || fontSize.xl};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    padding-top:    ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    @media (max-width: 768px) {
        font-size: ${fontSize.m};
    }
`

export const H3 = styled.h3`
    font-size: ${fontSize.m};
    color: ${props => props.color || color.primary};
    font-weight: ${props => props.fontWeight || fontSize.m};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    padding-top: ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    line-height: 120%;
    @media (max-width: 768px) {
        font-size: ${props => props.mobileFontSize || fontSize.sm};
    }
`
export const H4 = styled.h4`
    font-size: ${fontSize.sm};
    color: ${props => props.color || color.primary};
    font-weight: ${props => props.fontWeight || fontSize.sm};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    padding-top: ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    line-height: 120%;
    span{
        font-weight: 500;
    }
    @media (max-width: 768px) {
        font-size: ${props => props.mobileFontSize || fontSize.sm};
    }
`

export const P = styled.p`
    font-size: ${props => props.fontSize || fontSize.sm};
    color: ${props => props.color || color.primary};
    font-weight: ${props => props.fontWeight || fontSize.sm};
    text-align: ${props => props.textAlign || "center"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    padding-top: ${props => props.paddingTop || "0"};
    padding-bottom: ${props => props.paddingBottom || "0"};
    line-height: ${props => props.lineHeight || "120%"};
    @media (max-width: 768px) {
        font-size: ${props => props.mobileFontSize || fontSize.sm};
    }
`
