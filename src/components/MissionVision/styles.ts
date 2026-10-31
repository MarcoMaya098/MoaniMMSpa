import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Section = styled("section")`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr);
  align-items: center;
  gap: 4.5rem;
  padding: 4rem 0 5rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ArchPhoto = styled("img")`
  width: 100%;
  max-width: 420px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: 60% 50%;
  border-radius: 999px 999px 4px 4px;
  justify-self: center;
  box-shadow: 18px 18px 0 ${colors.blush};

  @media only screen and (max-width: 890px) {
    max-width: 320px;
  }
`;

export const Text = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

export const Lead = styled("h2")`
  margin-bottom: -0.75rem;
`;

export const LeadText = styled("p")`
  max-width: 56ch;
  margin-bottom: 0;
`;

export const Statement = styled("div")`
  padding-left: 1.5rem;
  border-left: 2px solid ${colors.pink};
`;

export const Heading = styled("h3")`
  font-size: 28px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 26px;
  }
`;

export const Para = styled("p")`
  max-width: 56ch;
  margin-bottom: 0;
`;
