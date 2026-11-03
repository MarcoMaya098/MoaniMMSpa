import { withTranslation, TFunction } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { imagePath } from "../SvgIcon";
import { WHATSAPP_URL } from "../contact";

// A soft ring that ripples out every few seconds to draw the eye without nagging.
const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.55;
  }
  70%, 100% {
    transform: scale(1.6);
    opacity: 0;
  }
`;

const Floating = styled("a")`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
  display: inline-flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 6px 18px rgba(24, 33, 109, 0.22);
  transition: transform 0.25s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 50%;
    background: #25d366;
    animation: ${ripple} 3.2s ease-out 2s infinite;
  }

  &:hover {
    transform: translateY(-3px) scale(1.04);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    right: 16px;
    bottom: 16px;
    width: 54px;
    height: 54px;
  }
`;

const WhatsAppButton = ({ t }: { t: TFunction }) => (
  <Floating
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={t("whatsappFab")}
    title={t("whatsappFab")}
  >
    <img src={imagePath("whatsapp.svg")} alt="" />
  </Floating>
);

export default withTranslation()(WhatsAppButton);
