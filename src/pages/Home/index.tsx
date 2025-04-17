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

const Contact = lazy(() => import("../../components/ContactForm"));
const DesciptionBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
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
      />
      <ContentBlock
        direction="right"
        title={SpecialServiceContent.title}
        content={SpecialServiceContent.text}
        icon="mision.png"
        id="specialServices"
      />

      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="producto.png"
        id="product"
      />
      <hr />
      <VisitBlock
        direction="left"
        title={VisitContent.title}
        content={VisitContent.text}
        section={VisitContent.section}
        icon="moani-background.jpeg"
        id="about"
      />

      <ContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="about.png"
        id="vision"
      />

      <ContentBlock
        direction="right"
        title={VisionContent.title}
        content={VisionContent.text}
        icon="vision.png"
        id="vision"
      />
      
      
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
