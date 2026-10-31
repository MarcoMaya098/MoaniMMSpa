import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { imagePath } from "../../common/SvgIcon";
import { MAPS_URL, WHATSAPP_URL } from "../../common/contact";
import {
  HeroSection,
  HeroPanel,
  ContentWrapper,
  MaxTitle,
  Content,
  ButtonWrapper,
  BookLink,
  InfoList,
  Visual,
  MainPhoto,
  SecondaryPhoto,
  Seal,
} from "./styles";

const IntroContentBlock = ({
  icon,
  secondaryIcon,
  title,
  content,
  button,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <HeroSection id={id}>
      <HeroPanel>
        <ContentWrapper>
          <Fade direction="up" triggerOnce cascade damping={0.15}>
            <MaxTitle>{t(title)}</MaxTitle>
            <Content>{t(content)}</Content>
            <ButtonWrapper>
              <BookLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {t("bookWhatsApp")}
              </BookLink>
              {typeof button === "object" &&
                button.map(
                  (
                    item: {
                      color?: string;
                      title: string;
                      toredirect?: string;
                    },
                    id: number
                  ) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo(item.toredirect!)}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  }
                )}
            </ButtonWrapper>
            <InfoList>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  {t("heroLocation")}
                </a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7.5V12l3 2" />
                </svg>
                <span>
                  {t("visitContentSectionFirstTextMF")}
                  <br />
                  {t("visitContentSectionFirstTextSat")}
                </span>
              </li>
            </InfoList>
          </Fade>
        </ContentWrapper>

        <Visual>
          <MainPhoto src={imagePath(icon)} alt="" />
          {secondaryIcon && <SecondaryPhoto src={imagePath(secondaryIcon)} alt="" />}
          <Seal viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path
                id="seal-circle"
                d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
              />
            </defs>
            <circle cx="100" cy="100" r="98" />
            <text>
              {/* textLength = circumference of the r=78 path, so the phrase closes the ring in any language */}
              <textPath href="#seal-circle" textLength="488" lengthAdjust="spacing">
                {t("heroSeal")}
              </textPath>
            </text>
            <path
              className="leaf"
              d="M100 78 C 88 90, 88 110, 100 122 C 112 110, 112 90, 100 78 Z M100 82 L100 120"
            />
          </Seal>
        </Visual>
      </HeroPanel>
    </HeroSection>
  );
};

export default withTranslation()(IntroContentBlock);
