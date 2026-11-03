import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import { revealDelay } from "../../common/Reveal";
import {
  Section,
  ArchPhoto,
  Text,
  Lead,
  LeadText,
  Statement,
  Heading,
  Para,
} from "./styles";

interface StatementItem {
  title: string;
  text: string;
}

interface MissionVisionProps {
  icon: string;
  title?: string;
  content?: string;
  items: StatementItem[];
  id: string;
  t: TFunction;
}

const MissionVision = ({ icon, title, content, items, id, t }: MissionVisionProps) => (
  <Section id={id}>
    <ArchPhoto src={imagePath(icon)} alt="" loading="lazy" data-reveal="left" />
    <Text>
      {title && <Lead data-reveal>{t(title)}</Lead>}
      {content && <LeadText data-reveal style={revealDelay(100)}>{t(content)}</LeadText>}
      {items.map((item, i) => (
        <Statement key={item.title} data-reveal style={revealDelay(200 + i * 140)}>
          <Heading>{t(item.title)}</Heading>
          <Para>{t(item.text)}</Para>
        </Statement>
      ))}
    </Text>
  </Section>
);

export default withTranslation()(MissionVision);
