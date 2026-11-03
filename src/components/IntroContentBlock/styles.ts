import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../styles/colors";
import { ease, float, lift, spin } from "../../styles/motion";

// Photos and seal pop in one after another, then drift gently so the hero feels alive.
const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const HeroSection = styled("section")`
  position: relative;
  padding: 1.5rem 0 5rem;

  @media only screen and (max-width: 890px) {
    padding: 1rem 0 3rem;
  }
`;

export const HeroPanel = styled("div")`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  align-items: center;
  gap: 2.5rem;
  background: ${colors.blush};
  border-radius: 28px;
  padding: 4.5rem 3.5rem;
  overflow: hidden;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem 3rem;
    gap: 2rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 500px;

  @media only screen and (max-width: 890px) {
    max-width: none;
    text-align: center;
  }
`;

export const MaxTitle = styled("h1")`
  font-size: 60px;
  line-height: 1.08;
  margin-bottom: 0;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 36px;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  max-width: 42ch;

  @media only screen and (max-width: 890px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    width: auto;
    margin-top: 0;
  }

  @media only screen and (max-width: 890px) {
    justify-content: center;
  }
`;

export const BookLink = styled("a")`
  display: inline-block;
  padding: 13px 28px;
  border-radius: 999px;
  background: ${colors.pink};
  border: 1px solid ${colors.pink};
  color: ${colors.white};
  font-weight: 500;
  ${lift}

  &:hover {
    background: ${colors.pinkHover};
    color: ${colors.white};
  }
`;

export const InfoList = styled("ul")`
  list-style: none;
  padding: 1.5rem 0 0;
  margin: 2rem 0 0;
  border-top: 1px solid ${colors.blushDeep};
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 1rem 2.5rem;
  font-size: 15px;
  color: ${colors.ink};

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    text-align: left;
    line-height: 1.5;
  }

  svg {
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 1px;
    fill: none;
    stroke: ${colors.pink};
    stroke-width: 1.6;
    stroke-linecap: round;
  }

  a {
    color: ${colors.ink};
    border-bottom: 1px solid ${colors.pink};
  }

  a:hover {
    color: ${colors.pink};
  }

  @media only screen and (max-width: 890px) {
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: max-content;
  }
`;

export const Visual = styled("div")`
  position: relative;
  aspect-ratio: 1 / 0.9;
  width: 100%;
  max-width: 560px;
  justify-self: end;

  @media only screen and (max-width: 890px) {
    justify-self: center;
    max-width: 440px;
  }
`;

export const MainPhoto = styled("img")`
  position: absolute;
  left: 0;
  top: 4%;
  width: 78%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: 62% 40%;
  border-radius: 50%;
  border: 8px solid ${colors.white};
  animation: ${popIn} 1.1s ${ease} 0.15s both, ${float} 9s ease-in-out 1.3s infinite;
`;

export const SecondaryPhoto = styled("img")`
  position: absolute;
  right: 0;
  top: 0;
  width: 36%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid ${colors.white};
  animation: ${popIn} 1.1s ${ease} 0.45s both, ${float} 7s ease-in-out 1.6s infinite reverse;
`;

export const Seal = styled("svg")`
  position: absolute;
  right: 6%;
  bottom: 0;
  width: 30%;
  height: auto;
  animation: ${popIn} 1s ${ease} 0.75s both;

  circle {
    fill: ${colors.white};
  }

  text {
    font-family: ${fonts.body};
    font-size: 14px;
    font-weight: 500;
    fill: ${colors.pink};
    transform-origin: 100px 100px;
    animation: ${spin} 40s linear infinite;
  }

  .leaf {
    fill: none;
    stroke: ${colors.pink};
    stroke-width: 1.5;
  }
`;
