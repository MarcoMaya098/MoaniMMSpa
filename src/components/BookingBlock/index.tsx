import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
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
    <Photo src={imagePath(icon)} alt="" loading="lazy" />
    <Panel>
      <Heading>{t("bookTitle")}</Heading>
      <Para>{t("bookText")}</Para>
      <Steps>
        {STEPS.map((step) => (
          <li key={step}>{t(step)}</li>
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
