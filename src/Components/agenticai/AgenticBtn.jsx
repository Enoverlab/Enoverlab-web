import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

/**
 * Pill-shaped button used across all Agentic AI sections.
 * bg / color props let each section preserve its own colour scheme.
 */
const AgenticBtn = ({ to, text, bg = "#ffffff", color = "#3d3d3d" }) => (
  <StyledAgenticBtn to={to} $bg={bg} $color={color}>
    {text}
  </StyledAgenticBtn>
);

export default AgenticBtn;

const StyledAgenticBtn = styled(HashLink)`
  font-family: 'Inter', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  font-size: clamp(1.5rem, 2vw, 1.8rem);
  font-weight: 600;
  padding: 1.4rem 4rem;
  border-radius: 10rem;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  letter-spacing: 0.01em;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;
