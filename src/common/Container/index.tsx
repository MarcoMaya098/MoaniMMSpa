import { StyledContainer } from "./styles";
import { ContainerProps } from "../../components/Block/types";

const Container = ({ border, children }: ContainerProps) => (
  <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
