import { withTranslation, TFunction } from "react-i18next";
import styled from "styled-components";
import { imagePath } from "../SvgIcon";
import { WHATSAPP_URL } from "../contact";

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
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: translateY(-2px);
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
