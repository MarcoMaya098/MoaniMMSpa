import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import { revealDelay } from "../../common/Reveal";
import {
  Section,
  Heading,
  Intro,
  Grid,
  Card,
  PhotoFrame,
  Photo,
  CardTitle,
  CardText,
  MoreLink,
} from "./styles";

interface ServiceItem {
  title: string;
  text: string;
  icon: string;
  redirect: string;
}

interface FeaturedServicesProps {
  title: string;
  content: string;
  items: ServiceItem[];
  id: string;
  t: TFunction;
}

const FeaturedServices = ({ title, content, items, id, t }: FeaturedServicesProps) => (
  <Section id={id}>
    <Heading data-reveal>{t(title)}</Heading>
    <Intro data-reveal style={revealDelay(100)}>{t(content)}</Intro>
    <Grid>
      {items.map((item, i) => (
        <Card key={item.redirect} to={`/${item.redirect}`} data-reveal style={revealDelay(i * 140)}>
          <PhotoFrame>
            <Photo src={imagePath(item.icon)} alt="" loading="lazy" />
          </PhotoFrame>
          <CardTitle>{t(item.title)}</CardTitle>
          <CardText>{t(item.text)}</CardText>
          <MoreLink>{t("ShowMore")}</MoreLink>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default withTranslation()(FeaturedServices);
