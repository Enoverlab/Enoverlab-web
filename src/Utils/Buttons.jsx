import styled from "styled-components";
import {theme} from "./Theme";
import BlueArrow from "../assets/ArrowBlue.png"
import WhiteArrow from "../assets/ArrowWhite.png"
import {Link} from "react-router-dom";

const  color = theme.color


export const PrimaryButton = ({to, buttText}) => {
    return (
        <StyledPrimaryButton>
        <Link to={to}>
                <span>{buttText}</span>
                <img src={BlueArrow} alt=""/>
        </Link>
        </StyledPrimaryButton>
    )
}



export const SecondaryButton = ({to, buttText}) => {
    return (
        <StyledSecondaryButton>
            <Link to={to}>
                <span>{buttText}</span>
                <img src={WhiteArrow} alt=""/>
            </Link>
        </StyledSecondaryButton>
    )
}

export const TertiaryButton = ({to, buttText}) => {
    return (
        <StyledTertiaryButton>
        <Link to={to}>
                <span>{buttText}</span>
                <img src={BlueArrow} alt=""/>
        </Link>
        </StyledTertiaryButton>
    )
}

export const MainButton = ({props, buttText}) => {
    return (
        <StyledMainButton>
            <Link to="/">
                <span>{buttText}</span>
                <img src={props === BlueArrow ? BlueArrow : WhiteArrow} alt=""/>
            </Link>
        </StyledMainButton>
    )
}


const StyledPrimaryButton = styled.div`  
    a{  
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid ${color.primary};
        padding:  1rem 1rem;
        text-decoration: none;
        background-color: ${color.light};
        color: ${color.primary};
        font-size: 1rem;
        img{
            width: 2.875rem;
            height: 1rem;
            margin-left: 0.5rem;
            @media(max-width: 768px){
                width: 1.5rem;   
            height: 0.7rem;       
            }
        }
        @media(max-width: 768px){
            font-size: 0.9rem;
            padding: 0.7rem 1rem; 
        }
    }
    &:hover{
            box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            -webkit-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            -moz-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            transition: box-shadow 0.3s ease-in-out;
        }
`
const StyledTertiaryButton = styled.div`  
    a{  
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${color.primary};
        padding:  1rem 1.25rem;
        text-decoration: none;
        background-color: ${color.quaternary};
        color: ${color.primary};
        font-size: 1rem;
        img{
            width: 2.875rem;
            height: 1rem;
            margin-left: 0.5rem;
            object-fit: contain;
            @media(max-width: 768px){
                width: 1.5rem;   
            height: 0.7rem;       
            }
        }
        @media(max-width: 768px){
            font-size: 0.9rem;
            padding: 0.7rem 1rem; 
        }
    }
    &:hover{
            box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            -webkit-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            -moz-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            transition: box-shadow 0.3s ease-in-out;
        }
`

const StyledSecondaryButton = styled.div`
    display: flex;
    background-color: ${color.primary};
    border: 1px solid ${color.primary};
    a{
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${color.light};
        font-size: 1rem;
        padding:  1rem 1.25rem;
        img{
            width: 2.875rem;
            height: 1rem;
            margin-left: 0.5rem;

            @media(max-width: 768px){
            width: 1.5rem;   
            height: 0.7rem;     
            }
        }
        @media(max-width: 768px){
            font-size: 0.9rem;
            padding: 0.7rem 1rem;      
        }   
    }
    &:hover{
        box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
        -webkit-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
        -moz-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            transition: box-shadow 0.3s ease-in-out;
        }
`
export const StyledMainButton = styled.div`
    display: flex;
    justify-content: center;
    padding:  1rem 1.25rem;
    align-items: center;
    background-color: ${props => props.backgroundColor || color.primary};
    border: 1px solid ${props => props.borderColor || color.primary};
    a{
        text-decoration: none;
        color: ${props => props.color || color.light};
        font-size: 1rem;
        img{
            width: 1.9rem;
            margin-left: 0.5rem;
        }
    }
    &:hover{
        box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
        -webkit-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
        -moz-box-shadow: 9px 6px 0px -1px rgba(0,0,0,1);
            transition: box-shadow 0.3s ease-in-out;
        }
`