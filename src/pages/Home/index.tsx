import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import DescriptionContent from "../../content/DescriptionContent.json";
import BasicServiceContent from "../../content/BasicServiceContent.json";
import MissionContent from "../../content/MisionContent.json";
import VisionContent from "../../content/VisionContent.json";

import SpecialServiceContent from "../../content/SpecialServiceContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import VisitContent from "../../content/VisitContent.json";

import VisitBlock from "../../components/VisitBlock";
import IntroContentBlock from "../../components/IntroContentBlock";
import ContentBlockReverse from "../../components/ContentBlockReverse";

const Contact = lazy(() => import("../../components/ContactForm"));
const DesciptionBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <IntroContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="landing.png"
        id="intro"
      />
      <DesciptionBlock
        title={DescriptionContent.title}
        content={DescriptionContent.text}
        // button={DescriptionContent.button}
      />
      <ContentBlock
        direction="left"
        title={BasicServiceContent.title}
        content={BasicServiceContent.text}
        // section={AboutContent.section}
        icon="mascarilla.png"
        id="basicServices"
        buttonShowMore={BasicServiceContent.redirect}
      />
      <ContentBlock
        direction="right"
        title={SpecialServiceContent.title}
        content={SpecialServiceContent.text}
        icon="mision.png"
        id="specialServices"
        buttonShowMore={SpecialServiceContent.redirect}
      />

      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="producto.png"
        id="product"
        buttonShowMore={ProductContent.redirect}
      />
      <hr id="visit"/>
      <VisitBlock
        direction="left"
        title={VisitContent.title}
        content={VisitContent.text}
        section={VisitContent.section}
        icon="moani-background.jpeg"
        id="about"
      />

      <ContentBlockReverse
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="about.png"
        id="mission"
      />

      <ContentBlockReverse
        direction="left"
        title={VisionContent.title}
        content={VisionContent.text}
        icon="vision.png"
        id="vision"
      />
      
    </Container>
  );
};

export default Home;
