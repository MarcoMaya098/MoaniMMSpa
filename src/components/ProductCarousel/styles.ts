import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../styles/colors";
import { ease } from "../../styles/motion";

const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(48px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

export const Wrapper = styled("section")`
  padding: 1rem 0 5rem;
`;

export const Toolbar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Hint = styled("p")`
  margin: 0;
  font-size: 15px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Controls = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
`;

export const Counter = styled("span")`
  font-family: ${fonts.display};
  letter-spacing: 0.12em;
  color: ${colors.navy};
  margin-right: 0.5rem;
  font-variant-numeric: tabular-nums;
`;

export const Arrow = styled("button")`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${colors.pink};
  background: transparent;
  color: ${colors.navy};
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.35s ${ease},
    opacity 0.25s ease;

  &:hover:not(:disabled) {
    background: ${colors.pink};
    color: ${colors.white};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
`;

export const Track = styled("div")<{ $dragging: boolean }>`
  display: flex;
  column-gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: ${(p) => (p.$dragging ? "none" : "x mandatory")};
  scroll-behavior: ${(p) => (p.$dragging ? "auto" : "smooth")};
  cursor: ${(p) => (p.$dragging ? "grabbing" : "grab")};
  user-select: none;
  padding: 0.5rem 0.25rem 1.5rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (hover: none) {
    cursor: auto;
  }
`;

export const Overlay = styled("div")`
  position: absolute;
  inset: auto 0 0 0;
  padding: 4rem 1.5rem 1.5rem;
  background: linear-gradient(to top, rgba(24, 33, 109, 0.88) 0%, rgba(24, 33, 109, 0.55) 55%, transparent 100%);
  color: ${colors.white};
  transition: padding 0.6s ${ease};
`;

export const Name = styled("h3")`
  font-size: 24px;
  color: ${colors.white};
  margin: 0;
`;

// Collapsed to zero height until hover/focus; animating grid rows lets it open to its natural height.
export const Details = styled("div")`
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 0.6s ${ease}, opacity 0.4s ease;

  > * {
    overflow: hidden;
  }
`;

export const Description = styled("p")`
  margin: 0;
  padding-top: 0.75rem;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const Card = styled("article")`
  position: relative;
  flex: 0 0 clamp(250px, 31%, 360px);
  aspect-ratio: 3 / 4;
  border-radius: 22px;
  overflow: hidden;
  scroll-snap-align: start;
  background: ${colors.blush};
  opacity: 0;

  ${Wrapper}.is-revealed & {
    animation: ${cardIn} 0.9s ${ease} both;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    transition: transform 1.2s ${ease}, filter 0.6s ease;
  }

  &:hover img,
  &:focus-within img {
    transform: scale(1.08);
    filter: saturate(1.1);
  }

  &:hover ${Details}, &:focus-within ${Details} {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  &:hover ${Overlay}, &:focus-within ${Overlay} {
    padding-top: 6rem;
  }

  &:focus-visible {
    outline: 2px solid ${colors.navy};
    outline-offset: 3px;
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 78%;
  }
`;

export const Progress = styled("div")`
  height: 2px;
  background: ${colors.blushDeep};
  border-radius: 2px;
  overflow: hidden;
`;

export const Bar = styled("div")`
  height: 100%;
  background: ${colors.pink};
  transform-origin: left center;
  transition: transform 0.3s ease-out;
`;
