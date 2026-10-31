import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { colors, fonts } from "../../styles/colors";

export const HeaderSection = styled("header")<{ $scrolled?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 900;
  padding: ${(p) => (p.$scrolled ? "0.4rem 0" : "0.9rem 0")};
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid ${(p) => (p.$scrolled ? colors.blushDeep : "transparent")};
  transition: padding 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;

export const Bar = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  display: flex;

  img {
    border-radius: 50%;
  }
`;

export const Burger = styled("button")`
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  cursor: pointer;

  svg {
    fill: ${colors.navy};
  }

  @media only screen and (max-width: 1024px) {
    display: inline-flex;
  }
`;

export const NotHidden = styled("nav")`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const DrawerTop = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  button {
    display: inline-flex;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  margin: 0;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;

const navItem = css`
  font-family: ${fonts.body};
  font-size: 1rem;
  margin: 0.5rem 1.1rem;
  cursor: pointer;

  &:hover {
    color: ${colors.pink};
  }

  &:hover ${Span} {
    border-bottom-color: ${colors.pink};
  }

  @media only screen and (max-width: 1024px) {
    margin: 0.9rem 0;
    font-size: 1.15rem;
    text-align: left;
  }
`;

export const NavLink2 = styled(Link)<{ $active?: boolean }>`
  ${navItem}
  color: ${(p) => (p.$active ? colors.pink : colors.navy)};

  ${Span} {
    border-bottom-color: ${(p) => (p.$active ? colors.pink : "transparent")};
  }
`;

export const NavButton = styled("button")`
  ${navItem}
  color: ${colors.navy};
  background: none;
  border: 0;
  padding: 0;
`;

export const BookLink = styled("a")`
  margin-left: 1rem;
  padding: 11px 26px;
  border-radius: 999px;
  background: ${colors.pink};
  color: ${colors.white};
  font-weight: 500;
  white-space: nowrap;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${colors.pinkHover};
    color: ${colors.white};
  }

  @media only screen and (max-width: 1024px) {
    margin: 1.5rem 0 0;
    text-align: center;
  }
`;
