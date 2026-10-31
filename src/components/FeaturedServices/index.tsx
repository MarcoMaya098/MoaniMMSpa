import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import {
  Section,
  Heading,
  Intro,
  Grid,
  Card,
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
    <Heading>{t(title)}</Heading>
    <Intro>{t(content)}</Intro>
    <Grid>
      {items.map((item) => (
        <Card key={item.redirect} to={`/${item.redirect}`}>
          <Photo src={imagePath(item.icon)} alt="" loading="lazy" />
          <CardTitle>{t(item.title)}</CardTitle>
          <CardText>{t(item.text)}</CardText>
          <MoreLink>{t("ShowMore")}</MoreLink>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default withTranslation()(FeaturedServices);
