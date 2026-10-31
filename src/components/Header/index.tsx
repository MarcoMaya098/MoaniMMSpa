import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useLocation, useHistory } from "react-router-dom";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { WHATSAPP_URL } from "../../common/contact";
import {
  HeaderSection,
  Bar,
  LogoContainer,
  Burger,
  NotHidden,
  DrawerTop,
  Menu,
  Outline,
  Span,
  NavLink2,
  NavButton,
  BookLink,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  // "Visítanos" lives on the home page; from other pages, navigate there first and let Home scroll.
  const goToVisit = () => {
    setVisibility(false);
    if (location.pathname === "/") {
      document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
    } else {
      history.push("/", { scrollTo: "visit" });
    }
  };

  const MenuItem = () => (
    <>
      {location.pathname !== "/" && (
        <NavLink2 to="/" onClick={() => setVisibility(false)}>
          <Span>{t("Home")}</Span>
        </NavLink2>
      )}
      <NavLink2
        to="/basic-services"
        $active={location.pathname === "/basic-services"}
        onClick={() => setVisibility(false)}
      >
        <Span>{t("BasicServices")}</Span>
      </NavLink2>
      <NavLink2
        to="/special-services"
        $active={location.pathname === "/special-services"}
        onClick={() => setVisibility(false)}
      >
        <Span>{t("SpecialServices")}</Span>
      </NavLink2>
      <NavLink2
        to="/products"
        $active={location.pathname === "/products"}
        onClick={() => setVisibility(false)}
      >
        <Span>{t("Product")}</Span>
      </NavLink2>
      <NavButton type="button" onClick={goToVisit}>
        <Span>{t("titleVisitContent")}</Span>
      </NavButton>
      <BookLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        {t("bookCta")}
      </BookLink>
    </>
  );

  return (
    <HeaderSection $scrolled={scrolled}>
      <Container>
        <Bar>
          <LogoContainer to="/" aria-label="Moani Spa">
            <SvgIcon src="moani.jpg" width="64px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger type="button" onClick={toggleButton} aria-label="Menu">
            <Outline />
          </Burger>
        </Bar>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <DrawerTop>
            <Menu>Menu</Menu>
            <Burger type="button" onClick={toggleButton} aria-label="Cerrar menú">
              <Outline />
            </Burger>
          </DrawerTop>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
