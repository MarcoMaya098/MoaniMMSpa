import styled, { css } from "styled-components";
import { colors, fonts } from "../../styles/colors";
import { lift } from "../../styles/motion";

export const Section = styled("section")`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  align-items: center;
  padding: 3rem 0 6rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
  }
`;

export const Photo = styled("img")`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid ${colors.white};

  @media only screen and (max-width: 890px) {
    width: 80%;
    justify-self: center;
    margin-bottom: -4rem;
  }
`;

export const Panel = styled("div")`
  background: ${colors.blush};
  border-radius: 0 240px 240px 0;
  margin-left: -6rem;
  padding: 3.5rem 5rem 3.5rem 8.5rem;

  @media only screen and (max-width: 890px) {
    margin-left: 0;
    border-radius: 28px;
    padding: 5.5rem 1.5rem 2.5rem;
    text-align: center;
  }
`;

export const Heading = styled("h2")`
  font-size: 40px;
  margin-bottom: 0.75rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`;

export const Para = styled("p")`
  max-width: 40ch;

  @media only screen and (max-width: 890px) {
    margin: 0 auto 1rem;
  }
`;

export const Steps = styled("ol")`
  counter-reset: step;
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  display: grid;
  gap: 0.75rem;

  li {
    counter-increment: step;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    color: ${colors.ink};
    font-size: 16px;
    text-align: left;
  }

  li::before {
    content: counter(step);
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${colors.pink};
    color: ${colors.pink};
    font-family: ${fonts.display};
    font-size: 15px;
  }

  @media only screen and (max-width: 890px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Actions = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  @media only screen and (max-width: 890px) {
    justify-content: center;
  }
`;

const pill = css`
  display: inline-block;
  border-radius: 999px;
  padding: 13px 28px;
  font-weight: 500;
  ${lift}
`;

export const PrimaryLink = styled("a")`
  ${pill}
  background: ${colors.pink};
  color: ${colors.white};

  &:hover {
    background: ${colors.pinkHover};
    color: ${colors.white};
  }
`;

export const SecondaryLink = styled("a")`
  color: ${colors.navy};
  font-weight: 500;
  border-bottom: 1px solid ${colors.pink};

  &:hover {
    color: ${colors.pink};
  }
`;
