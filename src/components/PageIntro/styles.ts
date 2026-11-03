import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../styles/colors";
import { ease } from "../../styles/motion";

const rise = keyframes`
  from {
    transform: translate3d(0, 105%, 0);
  }
  to {
    transform: none;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const draw = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const Header = styled("header")`
  text-align: center;
  padding: 4.5rem 0 2.5rem;
  max-width: 720px;
  margin: 0 auto;

  @media only screen and (max-width: 890px) {
    padding: 3rem 0 1.5rem;
  }
`;

export const Eyebrow = styled("span")`
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${colors.pink};
  margin-bottom: 1rem;
  animation: ${fadeUp} 0.8s ${ease} both;
`;

export const Title = styled("h1")`
  font-size: 64px;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 890px) {
    font-size: 44px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 36px;
  }
`;

// The mask: the word slides up from below its own baseline.
export const Word = styled("span")`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding-bottom: 0.08em;
  margin-right: 0.25em;
  animation-delay: inherit;

  &:last-child {
    margin-right: 0;
  }

  span {
    display: inline-block;
    animation: ${rise} 1s ${ease} both;
    animation-delay: inherit;
  }
`;

export const Lead = styled("p")`
  max-width: 56ch;
  margin: 0 auto;
  animation: ${fadeUp} 0.9s ${ease} both;

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 2px;
    margin: 2rem auto 0;
    background: ${colors.pink};
    transform-origin: center;
    animation: ${draw} 0.9s ${ease} both;
    animation-delay: inherit;
  }
`;

export const Group = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 3.5rem 0 1rem;

  /* Clear both the site header and the sticky group tabs when scrolled to. */
  && {
    scroll-margin-top: 150px;
  }
`;

export const Count = styled("span")`
  font-family: ${fonts.display};
  font-size: 88px;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px ${colors.pink};

  @media only screen and (max-width: 890px) {
    font-size: 60px;
  }
`;

export const GroupTitle = styled("h2")`
  font-family: ${fonts.display};
  font-size: 32px;
  margin: 0;
  white-space: nowrap;
`;

export const GroupRule = styled("span")`
  flex: 1;
  height: 1px;
  background: ${colors.blushDeep};
`;
