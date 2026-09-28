import { css } from "styled-components";

// Values sampled from the "flex-desktop-landing-page" / mobile Figma frames.
// Kept local to the Flex page rather than in Utils/Theme so other pages are unaffected.
export const flexColors = {
  primary: "#0052FF",
  navy: "#07008C",
  title: "#111111",
  body: "#475569",
  muted: "#6B7280",
  tint: "#F5F8FF",
  tintStrong: "#CCEBFF",
  tintSoft: "#E6EEFE",
  border: "#E5E9F2",
  card: "#FAFBFD",
  white: "#FFFFFF",
};

export const flexFont = `"Inter", "Plus Jakarta Sans", sans-serif`;

// Root font-size is 10px (App.js GlobalStyle), so 1rem = 10px throughout.
export const flexShell = css`
  width: min(100%, 144rem);
  margin: 0 auto;
  padding: 0 clamp(1.6rem, 5.8vw, 5rem);
`;

// index.css and App.js GlobalStyle set Plus Jakarta Sans on `*`, so an inherited
// font-family never reaches children; this scoped selector (0,1,0) outranks `*`.
// Bootstrap's CDN stylesheet (index.css) adds margins to headings/paragraphs/lists.
export const flexReset = css`
  &,
  & * {
    font-family: ${flexFont};
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const sectionTitle = css`
  font-size: clamp(3.2rem, 3.2vw, 3.6rem);
  font-weight: 800;
  line-height: 1.25;
  color: ${flexColors.title};
  text-align: center;

  .accent {
    color: ${flexColors.primary};
  }
`;

export const pillLabel = css`
  display: inline-block;
  padding: 0.6rem 1.6rem;
  border-radius: 10rem;
  background: ${flexColors.tintStrong};
  color: ${flexColors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

// Strong ease-out: movement starts immediately, so reveals read as responsive, not slow.
export const flexEase = "cubic-bezier(0.23, 1, 0.32, 1)";

/**
 * Hover styles only for real pointers (touch "hover" sticks after a tap) and only
 * when the visitor hasn't asked for reduced motion.
 */
export const onHover = (styles) => css`
  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    ${styles}
  }
`;

/**
 * Scroll-reveal + icon stroke-draw, driven by the `data-inview` attribute that
 * useFlexReveal puts on the section (or on a nested element observed on its own).
 * `--i` on an element staggers it. Hover lifts use the separate `translate`
 * property so they don't inherit the reveal's transform delay.
 */
export const flexMotion = css`
  .reveal {
    --reveal-delay: calc(var(--i, 0) * 70ms);
    opacity: 0;
    transform: translateY(1.6rem);
    transition:
      opacity 700ms ${flexEase} var(--reveal-delay),
      transform 700ms ${flexEase} var(--reveal-delay),
      translate 220ms ${flexEase},
      box-shadow 220ms ${flexEase},
      border-color 220ms ease;
  }

  .reveal--media {
    opacity: 1;
    transform: scale(0.97);
    transition: transform 1200ms ${flexEase};
  }

  &[data-inview="true"] .reveal,
  [data-inview="true"] .reveal,
  .reveal[data-inview="true"] {
    opacity: 1;
    transform: none;
  }

  /* --stroke-len is measured per shape by useFlexReveal; without it the icon just shows. */
  .draw :is(path, circle, rect, line, polyline, polygon, ellipse) {
    stroke-dasharray: var(--stroke-len, none);
    stroke-dashoffset: var(--stroke-len, 0);
    transition: stroke-dashoffset 1100ms ${flexEase}
      calc(var(--i, 0) * 70ms + 250ms);
  }

  &[data-inview="true"]
    .draw
    :is(path, circle, rect, line, polyline, polygon, ellipse),
  [data-inview="true"]
    .draw
    :is(path, circle, rect, line, polyline, polygon, ellipse) {
    stroke-dashoffset: 0;
  }

  /* A nested observer (e.g. a list far below its heading on mobile) that hasn't
     fired keeps its content hidden even once the section has. Must stay after the
     rules above: same specificity, so source order decides. */
  [data-inview="false"] .reveal {
    opacity: 0;
    transform: translateY(1.6rem);
  }

  [data-inview="false"]
    .draw
    :is(path, circle, rect, line, polyline, polygon, ellipse) {
    stroke-dashoffset: var(--stroke-len, 0);
  }

  /* Reduced motion keeps the fade (it aids reading order) but drops all movement. */
  @media (prefers-reduced-motion: reduce) {
    .reveal,
    .reveal--media {
      transform: none;
      transition: opacity 300ms ease;
    }

    .draw :is(path, circle, rect, line, polyline, polygon, ellipse) {
      stroke-dasharray: none;
      transition: none;
    }
  }
`;
