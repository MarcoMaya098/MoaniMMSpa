import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  NavLink,
  NavLink2,
} from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import { useLocation } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
          {location.pathname !== "/" && (
            <NavLink2 to="/" onClick={() => setVisibility(false)}>
              <Span>{t("Home")}</Span>
            </NavLink2>
          )}
          <NavLink2 to="/basic-services" onClick={() => setVisibility(false)}>
            <Span>{t("BasicServices")}</Span>
          </NavLink2>
          <NavLink2 to="/special-services" onClick={() => setVisibility(false)}>
            <Span>{t("SpecialServices")}</Span>
          </NavLink2>
          <NavLink2 to="/products" onClick={() => setVisibility(false)}>
            <Span>{t("Product")}</Span>
          </NavLink2>
          {location.pathname === "/" && (
          <CustomNavLinkSmall
            style={{ width: "180px" }}
            onClick={() => scrollTo("visit")}
          >
            <Span>
              <Button>{t("About")}</Button>
            </Span>
          </CustomNavLinkSmall>
        )}

      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
          <SvgIcon src="moani.jpg"  width="150px" height="150px"/>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
