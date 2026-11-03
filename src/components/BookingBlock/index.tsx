import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import { revealDelay } from "../../common/Reveal";
import { PHONE_LABEL, PHONE_URL, WHATSAPP_URL } from "../../common/contact";
import {
  Section,
  Photo,
  Panel,
  Heading,
  Para,
  Steps,
  Actions,
  PrimaryLink,
  SecondaryLink,
} from "./styles";

const STEPS = ["bookStep1", "bookStep2", "bookStep3"];

interface BookingBlockProps {
  icon: string;
  id: string;
  t: TFunction;
}

const BookingBlock = ({ icon, id, t }: BookingBlockProps) => (
  <Section id={id}>
    <Photo src={imagePath(icon)} alt="" loading="lazy" data-reveal="left" />
    <Panel data-reveal="right" style={revealDelay(120)}>
      <Heading>{t("bookTitle")}</Heading>
      <Para>{t("bookText")}</Para>
      <Steps>
        {STEPS.map((step, i) => (
          <li key={step} data-reveal style={revealDelay(400 + i * 120)}>
            {t(step)}
          </li>
        ))}
      </Steps>
      <Actions>
        <PrimaryLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          {t("bookWhatsApp")}
        </PrimaryLink>
        <SecondaryLink href={PHONE_URL}>
          {t("bookCall")} {PHONE_LABEL}
        </SecondaryLink>
      </Actions>
    </Panel>
  </Section>
);

export default withTranslation()(BookingBlock);
