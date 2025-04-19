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

const SpecialServices = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* <IntroContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="landing.png"
        id="intro"
      /> */}
       <DesciptionBlock
        title="titleSpecialServiceContent2"
        content="titleSpecialServiceContentText2"
      />

      <ContentBlock
        direction="left"
        title="titleHifuContent"
        content="titleHifuContentText"
        icon="hifu.png"
        id="hifu"
      />

      <ContentBlock
        direction="right"
        title="titleMorpheusContent"
        content="titleMorpheusContentText"
        icon="morpheous.jpeg"
        id="morpheus"
      />

      <ContentBlock
        direction="left"
        title="titleDepilationContent"
        content="titleDepilationContentText"
        icon="diodo.png"
        id="depilation"
      />
   
      
      
      
    </Container>
  );
};

export default SpecialServices;
