import { StyledButton } from "./styles";
import { ButtonProps } from "../../components/Block/types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
