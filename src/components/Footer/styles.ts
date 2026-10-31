import styled from "styled-components";
import { Link } from "react-router-dom";
import Mandala from "../../common/Mandala";
import { colors, fonts } from "../../styles/colors";

export const FooterSection = styled("footer")`
  position: relative;
  overflow: hidden;
  background: ${colors.blush};
  padding: 3.5rem 0 1.5rem;
  text-align: center;
`;

export const FooterFlower = styled(Mandala)<{ $side: "left" | "right" }>`
  position: absolute;
  top: 3rem;
  ${(p) => p.$side}: 6%;
  width: 150px;
  height: 150px;
  color: ${colors.ornament};
  pointer-events: none;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-block;

  img {
    border-radius: 50%;
  }
`;

export const Nav = styled("nav")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 2rem;
  margin: 1.5rem 0 2.5rem;
`;

export const NavLink = styled(Link)`
  color: ${colors.navy};
  font-weight: 500;

  &:hover {
    color: ${colors.pink};
  }
`;

export const Columns = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Column = styled("div")``;

export const Title = styled("h4")`
  font-size: 20px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 20px;
  }
`;

export const Para = styled("p")`
  font-size: 15px;
  margin-bottom: 0.25rem;

  a {
    color: ${colors.ink};
  }

  a:hover {
    color: ${colors.pink};
  }
`;

export const Socials = styled("div")`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin: 2.5rem 0 2rem;

  a {
    display: inline-flex;
    transition: transform 0.15s ease-in-out;
  }

  a:hover {
    transform: translateY(-2px);
  }
`;

export const Bottom = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${colors.blushDeep};
  padding-top: 1.25rem;
  font-family: ${fonts.body};
  font-size: 14px;
  color: ${colors.ink};

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LanguageSwitch = styled("button")`
  display: inline-flex;
  padding: 2px;
  background: none;
  border: 0;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    border-radius: 50%;
  }
`;
