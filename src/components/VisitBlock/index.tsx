import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { imagePath } from "../../common/SvgIcon";
import { MAPS_URL, MAP_EMBED_URL } from "../../common/contact";
import { revealDelay } from "../../common/Reveal";
import {
  ContentSection,
  Banner,
  Title,
  Content,
  Photo,
  Details,
  Info,
  Detail,
  MinTitle,
  MinPara,
  DirectionsLink,
  Map,
} from "./styles";

const VisitBlock = ({ icon, title, content, section, t, id }: ContentBlockProps) => (
  <ContentSection id={id}>
    <Banner data-reveal="zoom">
      <Title>{t(title)}</Title>
      <Content>{t(content)}</Content>
    </Banner>
    <Photo src={imagePath(icon)} alt={t(title)} loading="lazy" data-reveal style={revealDelay(150)} />
    <Details>
      <Info data-reveal="left">
        {typeof section === "object" &&
          section.map((item, id) => {
            const content2 = t(item.content2);
            return (
              <Detail key={id}>
                <MinTitle>{t(item.title)}</MinTitle>
                <MinPara>{t(item.content)}</MinPara>
                {content2 && <MinPara>{content2}</MinPara>}
              </Detail>
            );
          })}
        <DirectionsLink href={MAPS_URL} target="_blank" rel="noopener noreferrer">
          {t("directions")}
        </DirectionsLink>
      </Info>
      <Map
        data-reveal="right"
        style={revealDelay(120)}
        title={t("visitTileSectionSecondText")}
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Details>
  </ContentSection>
);

export default withTranslation()(VisitBlock);
