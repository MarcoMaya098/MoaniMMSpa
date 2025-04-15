import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const VisitBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            content2: string;
                          },
                          id: number
                        ) => {
                          const content = t(item.content);
                          const content2 = t(item.content2);
                  
                          // Lógica para detectar si es una dirección (puedes ajustarla)
                          const isAddress = content.includes("Av.") || content.includes("Col.") || content.includes("Tijuana");
                  
                          return (
                            <Col key={id} span={11}>
                              <MinTitle>{t(item.title)}</MinTitle>
                  
                              {/* Si es dirección, ponerlo como link a Google Maps */}
                              {isAddress ? (
                                <MinPara>
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {content}
                                  </a>
                                </MinPara>
                              ) : (
                                <MinPara>{content}</MinPara>
                              )}
                  
                              {/* Segunda línea normal (puedes aplicar la misma lógica si se necesita) */}
                              {content2 && <MinPara>{content2}</MinPara>}
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(VisitBlock);
