import { ReactNode } from "react";
import styled from "styled-components";
import Mandala from "../Mandala";
import { colors } from "../../styles/colors";

// Pastel page background with flower ornaments peeking in from the side margins.
// The ornament layer clips itself, so the page wrapper needs no overflow rule
// (which would break the sticky header).
const Page = styled("div")`
  position: relative;
  z-index: 0;
  background: ${colors.page};
`;

const Ornaments = styled("div")`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  color: ${colors.ornament};
`;

const Flower = styled(Mandala)<{ $top: string; $side: "left" | "right"; $size: number }>`
  position: absolute;
  top: ${(p) => p.$top};
  ${(p) => p.$side}: ${(p) => -p.$size / 2}px;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;

  @media only screen and (max-width: 768px) {
    ${(p) => p.$side}: ${(p) => -p.$size * 0.36}px;
    width: ${(p) => p.$size * 0.55}px;
    height: ${(p) => p.$size * 0.55}px;
    opacity: 0.7;
  }
`;

const FLOWERS: { top: string; side: "left" | "right"; size: number }[] = [
  { top: "9%", side: "left", size: 220 },
  { top: "26%", side: "right", size: 260 },
  { top: "45%", side: "left", size: 240 },
  { top: "63%", side: "right", size: 220 },
  { top: "80%", side: "left", size: 200 },
];

const PageFrame = ({ children }: { children: ReactNode }) => (
  <Page>
    <Ornaments aria-hidden="true">
      {FLOWERS.map((f) => (
        <Flower key={f.top} $top={f.top} $side={f.side} $size={f.size} />
      ))}
    </Ornaments>
    {children}
  </Page>
);

export default PageFrame;
