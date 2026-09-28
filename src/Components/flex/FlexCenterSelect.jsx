import React, { useEffect, useId, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { useClickAway } from "@uidotdev/usehooks";
import { flexColors, flexEase, flexFont, onHover } from "./flexTheme";

/**
 * Custom listbox (WAI-ARIA "select-only combobox" pattern) so the open panel can
 * match the design's styled dropdown, which a native <select> can't do.
 * Keyboard: arrows/Home/End move, Enter/Space pick, Esc/Tab close.
 *
 * Controlled: `value` is a centre id or null; `onChange` receives the picked id.
 * `labelId` must point at the visible label element rendered by the parent.
 */
const FlexCenterSelect = ({
  centers,
  labelId,
  value: selectedId,
  onChange,
  placeholder = "Select Center",
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const wrapRef = useClickAway(() => setOpen(false));
  const baseId = useId();
  const listId = `${baseId}-list`;
  const optionId = (i) => `${baseId}-opt-${i}`;

  const selected = centers.find((c) => c.id === selectedId);

  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  const openList = (startIndex) => {
    const selectedIndex = centers.findIndex((c) => c.id === selectedId);
    setActiveIndex(startIndex ?? (selectedIndex >= 0 ? selectedIndex : 0));
    setOpen(true);
  };

  const close = ({ refocus = true } = {}) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const choose = (index) => {
    onChange(centers[index].id);
    close();
  };

  const onButtonKeyDown = (e) => {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      openList(e.key === "ArrowUp" ? centers.length - 1 : undefined);
    }
  };

  const onListKeyDown = (e) => {
    const last = centers.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, last));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(last);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (activeIndex >= 0) choose(activeIndex);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "Tab":
        // Refocus the trigger synchronously (no preventDefault) so the browser's Tab
        // continues from it; otherwise focus is lost when the listbox unmounts.
        close();
        break;
      default:
    }
  };

  return (
    <StyledSelect ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className={selected ? "trigger" : "trigger trigger--empty"}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${baseId}-value`}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onButtonKeyDown}
      >
        <span id={`${baseId}-value`} className="trigger-value">
          {selected ? selected.name : placeholder}
        </span>
        <FiChevronDown
          aria-hidden="true"
          className={open ? "chevron chevron--open" : "chevron"}
        />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={labelId}
          aria-activedescendant={
            activeIndex >= 0 ? optionId(activeIndex) : undefined
          }
          onKeyDown={onListKeyDown}
        >
          {centers.map((c, i) => (
            <li
              key={c.id}
              id={optionId(i)}
              role="option"
              aria-selected={c.id === selectedId}
              className={i === activeIndex ? "option option--active" : "option"}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => choose(i)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </StyledSelect>
  );
};

export default FlexCenterSelect;

// Short and anchored at the top edge so the panel grows out of the field it belongs to.
const panelIn = keyframes`
  from { opacity: 0; transform: translateY(-0.4rem) scale(0.98); }
`;

const panelFade = keyframes`
  from { opacity: 0; }
`;

const StyledSelect = styled.div`
  position: relative;
  width: min(100%, 32rem);
  font-family: ${flexFont};

  .trigger {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    padding: 1.1rem 1.4rem;
    font: inherit;
    font-size: 1.4rem;
    color: ${flexColors.body};
    text-align: left;
    background: ${flexColors.white};
    border: 1px solid #c4c4c4;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: border-color 200ms ease;
  }

  ${onHover(`
    .trigger:hover {
      border-color: #9aa3b5;
    }
  `)}

  .trigger--empty .trigger-value {
    color: #a3a3a3;
    font-style: italic;
  }

  .trigger:focus-visible {
    outline: 2px solid ${flexColors.primary};
    outline-offset: 2px;
  }

  .trigger-value {
    flex: 1;
    white-space: nowrap;
  }

  .chevron {
    flex-shrink: 0;
    font-size: 1.8rem;
    color: #a3a3a3;
    transition: transform 200ms ${flexEase};
  }

  .chevron--open {
    transform: rotate(180deg);
  }

  /* Attribute selector lifts specificity above the parent section's flexReset "ul". */
  ul[role="listbox"] {
    position: absolute;
    z-index: 20;
    top: calc(100% + 0.8rem);
    left: 0;
    width: 100%;
    text-align: left;
    margin: 0;
    padding: 0.8rem 1.6rem;
    list-style: none;
    background: ${flexColors.white};
    border: 1px solid #e8e8e8;
    border-radius: 1.2rem;
    box-shadow: 0 1.2rem 3.2rem rgba(17, 17, 17, 0.12);
    outline: none;
    transform-origin: top center;
    animation: ${panelIn} 180ms ${flexEase};

    @media (prefers-reduced-motion: reduce) {
      animation-name: ${panelFade};
    }
  }

  .option {
    padding: 1.4rem 0.4rem;
    font-size: 1.5rem;
    color: #525252;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 0.6rem;
    transition: color 150ms ease;
  }

  .option + .option {
    border-top: 1px solid #ececec;
  }

  .option--active {
    color: ${flexColors.primary};
  }

  .option[aria-selected="true"] {
    font-weight: 600;
  }
`;
