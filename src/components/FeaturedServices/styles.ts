import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export const Section = styled("section")`
  padding: 4rem 0 5rem;
`;

export const Heading = styled("h2")`
  margin-bottom: 0.75rem;
`;

export const Intro = styled("p")`
  max-width: 60ch;
  margin-bottom: 2.75rem;
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    gap: 2.75rem;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

export const Photo = styled("img")`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 890px) {
    aspect-ratio: 4 / 3;
  }
`;

export const CardTitle = styled("h3")`
  font-size: 24px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 24px;
  }
`;

export const CardText = styled("p")`
  font-size: 16px;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MoreLink = styled("span")`
  margin-top: auto;
  align-self: flex-start;
  font-weight: 500;
  color: ${colors.navy};
  padding-bottom: 2px;
  border-bottom: 1px solid ${colors.pink};

  ${Card}:hover &,
  ${Card}:focus-visible & {
    color: ${colors.pink};
  }
`;
