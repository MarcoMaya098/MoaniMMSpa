import styled from "styled-components";
import { colors, fonts } from "../../styles/colors";
import { ease } from "../../styles/motion";

export const Section = styled("section")<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-areas: ${(p) => (p.$reverse ? `"body media"` : `"media body"`)};
  align-items: center;
  gap: 4.5rem;
  padding: 3.5rem 0;

  @media only screen and (max-width: 890px) {
    grid-template-columns: 1fr;
    grid-template-areas: "media" "body";
    gap: 1.75rem;
    padding: 2rem 0;
  }
`;

export const Media = styled("div")`
  grid-area: media;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: ${colors.blush};
  aspect-ratio: 4 / 3;
`;

// The reveal wipes the curtain open; the zoom layer below handles hover, so their transitions never collide.
// The curtain overhangs the frame by 8% top and bottom so the parallax shift never shows an edge.
export const Curtain = styled("div")`
  position: absolute;
  inset: -8% 0;
  transform: translate3d(0, var(--parallax, 0%), 0);
  will-change: transform;
`;

export const Zoom = styled("div")`
  width: 100%;
  height: 100%;
  transition: transform 1.2s ${ease};

  ${Media}:hover & {
    transform: scale(1.04);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }
`;

export const Body = styled("div")`
  grid-area: body;
  max-width: 480px;
`;

export const Index = styled("span")`
  display: block;
  font-family: ${fonts.display};
  font-size: 15px;
  letter-spacing: 0.2em;
  color: ${colors.pink};
  margin-bottom: 0.75rem;
`;

export const Title = styled("h2")`
  font-size: 40px;
  margin-bottom: 1rem;

  @media only screen and (max-width: 890px) {
    font-size: 32px;
  }
`;

export const Rule = styled("span")`
  display: block;
  width: 64px;
  height: 2px;
  background: ${colors.pink};
  margin-bottom: 1.25rem;
`;

export const Text = styled("p")`
  margin-bottom: 0;
`;

