import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
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
    <ArchPhoto src={imagePath(icon)} alt="" loading="lazy" />
    <Text>
      {title && <Lead>{t(title)}</Lead>}
      {content && <LeadText>{t(content)}</LeadText>}
      {items.map((item) => (
        <Statement key={item.title}>
          <Heading>{t(item.title)}</Heading>
          <Para>{t(item.text)}</Para>
        </Statement>
      ))}
    </Text>
  </Section>
);

export default withTranslation()(MissionVision);
