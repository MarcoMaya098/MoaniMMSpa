import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ease } from "../../styles/motion";

// Sits just below the sticky site header.
export const Bar = styled("nav")`
  position: sticky;
  top: 92px;
  z-index: 800;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 1rem;
  pointer-events: none;

  @media only screen and (max-width: 890px) {
    top: 84px;
  }
`;

export const Tabs = styled("div")`
  position: relative;
  display: inline-flex;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid ${colors.blushDeep};
  box-shadow: 0 10px 30px -18px rgba(24, 33, 109, 0.45);
  pointer-events: auto;
`;

export const Pill = styled("span")`
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 0;
  border-radius: 999px;
  background: ${colors.pink};
  transition: transform 0.55s ${ease}, width 0.55s ${ease};
`;

export const Tab = styled("button")<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  border: 0;
  background: none;
  padding: 10px 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: ${(p) => (p.$active ? colors.white : colors.navy)};
  transition: color 0.35s ease;

  &:hover {
    color: ${(p) => (p.$active ? colors.white : colors.pink)};
  }
`;
