import React from "react";
import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { flexColors, flexEase, flexFont, onHover } from "./flexTheme";

/**
 * Internal paths and "#hash" targets go through HashLink (smooth-scroll to the
 * section); absolute URLs and files (e.g. a syllabus PDF in /public) render as a
 * plain <a>, since the router would otherwise swallow them into its 404 route.
 */
const FlexBtn = ({
  to,
  children,
  bg = flexColors.primary,
  color = flexColors.white,
  block = false,
  size = "md",
}) => {
  const isExternal = /^https?:\/\//.test(to) || /\.pdf$/i.test(to);
  const styleProps = { $bg: bg, $color: color, $block: block, $size: size };

  if (isExternal) {
    return (
      <StyledAnchor
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        {...styleProps}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledHashLink to={to} smooth {...styleProps}>
      {children}
    </StyledHashLink>
  );
};

export default FlexBtn;

const btnStyles = css`
  font-family: ${flexFont};
  display: ${(p) => (p.$block ? "flex" : "inline-flex")};
  width: ${(p) => (p.$block ? "100%" : "auto")};
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$bg};
  color: ${(p) => p.$color};
  font-size: ${(p) => (p.$size === "sm" ? "1.2rem" : "1.6rem")};
  font-weight: 600;
  line-height: 1;
  padding: ${(p) => (p.$size === "sm" ? "1rem 2rem" : "1.6rem 2.8rem")};
  border-radius: 0.8rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition:
    opacity 200ms ease,
    box-shadow 200ms ease,
    transform 160ms ${flexEase};

  /* Keeps Bootstrap's global a:hover colour off the label on every device. */
  &:hover {
    color: ${(p) => p.$color};
  }

  ${onHover(css`
    &:hover {
      opacity: 0.92;
      box-shadow: 0 0.8rem 2rem -1rem rgba(0, 82, 255, 0.55);
    }
  `)}

  /* Press feedback stays even with reduced motion: it's a tiny scale, not travel. */
  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${flexColors.primary};
    outline-offset: 3px;
  }
`;

const StyledHashLink = styled(HashLink)`
  ${btnStyles}
`;

const StyledAnchor = styled.a`
  ${btnStyles}
`;
