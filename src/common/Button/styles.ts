import styled from "styled-components";
import { colors, fonts } from "../../styles/colors";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || colors.pink};
  color: ${(p) => (p.color ? colors.navy : colors.white)};
  font-family: ${fonts.body};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  width: 100%;
  border: 1px solid ${colors.pink};
  border-radius: 999px;
  padding: 13px 28px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 220px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;

  &:hover,
  &:active {
    color: ${colors.white};
    border-color: ${colors.pinkHover};
    background-color: ${colors.pinkHover};
  }
`;
