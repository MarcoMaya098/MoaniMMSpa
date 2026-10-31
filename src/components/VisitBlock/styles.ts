import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContentSection = styled("section")`
  position: relative;
  padding: 3rem 0 4rem;
`;

export const Banner = styled("div")`
  background: ${colors.pink};
  border-radius: 28px;
  padding: 4rem 2rem 11rem;
  text-align: center;

  @media only screen and (max-width: 890px) {
    padding: 3rem 1.5rem 6rem;
  }
`;

export const Title = styled("h2")`
  color: ${colors.white};
  margin-bottom: 0.75rem;
`;

export const Content = styled("p")`
  color: ${colors.white};
  font-weight: 400;
  max-width: 46ch;
  margin: 0 auto;
`;

export const Photo = styled("img")`
  display: block;
  width: 72%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin: -8rem auto 0;
  border-radius: 4px;
  border: 8px solid ${colors.white};

  @media only screen and (max-width: 890px) {
    width: 90%;
    margin-top: -4rem;
  }
`;

export const Details = styled("div")`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: 2.5rem;
  width: 72%;
  margin: 2.5rem auto 0;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 1.5rem;
  }
`;

export const Info = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Detail = styled("div")`
  border-top: 1px solid ${colors.blushDeep};
  padding-top: 1rem;
`;

export const MinTitle = styled("h3")`
  font-size: 22px;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 890px) {
    font-size: 22px;
  }
`;

export const MinPara = styled("p")`
  font-size: 16px;
  margin-bottom: 0.25rem;
`;

export const DirectionsLink = styled("a")`
  align-self: flex-start;
  padding: 11px 24px;
  border-radius: 999px;
  border: 1px solid ${colors.pink};
  color: ${colors.navy};
  font-weight: 500;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background: ${colors.pink};
    color: ${colors.white};
  }
`;

export const Map = styled("iframe")`
  width: 100%;
  min-height: 300px;
  height: 100%;
  border: 0;
  border-radius: 4px;
  background: ${colors.blush};
`;
