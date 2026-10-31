import { withTranslation, TFunction } from "react-i18next";
import i18n from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_LABEL,
  PHONE_URL,
  WHATSAPP_URL,
} from "../../common/contact";
import {
  FooterSection,
  LogoLink,
  Nav,
  NavLink,
  Columns,
  Column,
  Title,
  Para,
  Socials,
  LanguageSwitchContainer,
  LanguageSwitch,
  Bottom,
} from "./styles";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/moanispa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    src: "instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61574727437328",
    src: "facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.tiktok.com/@moanispa20?_t=ZS-8w3SgPmuquL&_r=1",
    src: "tiktok.svg",
    label: "TikTok",
  },
  { href: WHATSAPP_URL, src: "whatsapp.svg", label: "WhatsApp" },
];

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <FooterSection>
      <Container>
        <LogoLink to="/" aria-label="Moani Spa">
          <SvgIcon src="moani.jpg" width="96px" height="96px" />
        </LogoLink>

        <Nav>
          <NavLink to="/">{t("Home")}</NavLink>
          <NavLink to="/basic-services">{t("BasicServices")}</NavLink>
          <NavLink to="/special-services">{t("SpecialServices")}</NavLink>
          <NavLink to="/products">{t("Product")}</NavLink>
        </Nav>

        <Columns>
          <Column>
            <Title>{t("Address")}</Title>
            <Para>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                {ADDRESS}
              </a>
            </Para>
          </Column>
          <Column>
            <Title>{t("Contact")}</Title>
            <Para>
              <a href={PHONE_URL}>{PHONE_LABEL}</a>
            </Para>
            <Para>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </Para>
          </Column>
          <Column>
            <Title>{t("visitTitleSectionFirstText")}</Title>
            <Para>{t("visitContentSectionFirstTextMF")}</Para>
            <Para>{t("visitContentSectionFirstTextSat")}</Para>
          </Column>
        </Columns>

        <Socials>
          {SOCIAL_LINKS.map(({ href, src, label }) => (
            <a key={src} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <SvgIcon src={src} width="28px" height="28px" />
            </a>
          ))}
        </Socials>

        <Bottom>
          <span>© {new Date().getFullYear()} Moani Spa</span>
          <LanguageSwitchContainer>
            <span>{t("Language")}</span>
            <LanguageSwitch type="button" onClick={() => handleChange("es")} aria-label="Español">
              <SvgIcon src="spain.svg" width="24px" height="24px" />
            </LanguageSwitch>
            <LanguageSwitch type="button" onClick={() => handleChange("en")} aria-label="English">
              <SvgIcon src="united-states.svg" width="24px" height="24px" />
            </LanguageSwitch>
          </LanguageSwitchContainer>
        </Bottom>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
