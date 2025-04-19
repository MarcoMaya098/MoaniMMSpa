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

const BasicServices = () => {
  return (
    <Container>
      <ScrollToTop />
      

      <DesciptionBlock
        title="titleBasicServiceContent2"
        content="titleBasicServiceContentText2"
      />
      
      <ContentBlock
        direction="left"
        title="titleHydraulicFacialContent"
        content="titleHydraulicFacialContentText"
        icon="facialH.png"
        id="HydraulicFacial"
      />

      <ContentBlock
        direction="right"
        title="titlecleanFacialContent"
        content="titlecleanFacialContentText"
        icon="facialC.png"
        id="cleanFacial"
      />

      <ContentBlock
        direction="left"
        title="titleSpecialFacialDermapenContent"
        content="titleSpecialFacialDermapenContentText"
        icon="facialDermapen.png"
        id="SpecialFacialDermapen"
      />

      <ContentBlock
        direction="right"
        title="titleSpecialFacialRadioFContent"
        content="titleSpecialFacialRadioFContentText"
        icon="facialRF.png"
        id="SpecialFacialRadioF"
      />

      <ContentBlock
        direction="left"
        title="titleDespigmentFacialContent"
        content="titleDespigmentFacialContentText"
        icon="facialDespig.jpg"
        id="DespigmentFacial"
      />

      <ContentBlock
        direction="right"
        title="titleAcneFacialContent"
        content="titleAcneFacialContentText"
        icon="facialAcne.png"
        id="AcneFacial"
      />

      <ContentBlock
        direction="left"
        title="titleDermaplaningFacialContent"
        content="titleDermaplaningFacialContentText"
        icon="dermaplaning.png"
        id="DermaplaningFacial"
      />

      <hr id="massage"/>
      


      <ContentBlockReverse
        direction="right"
        title="titlerelaxMassageContent"
        content="titlerelaxMassageContentText"
        icon="massageRelaxing.png"
        id="relaxMassage"
      />


      <ContentBlockReverse
        direction="left"
        title="titleDescMassageContent"
        content="titleDescMassageContentText"
        icon="massageDesco.png"
        id="descMassage"
      />
      
      <ContentBlockReverse
        direction="right"
        title="titleReductMassageContent"
        content="titleReductMassageContentText"
        icon="massageReduce.png"
        id="reductMassage"
      />
      
      <ContentBlockReverse
        direction="left"
        title="titleLNMassageContent"
        content="titleLNMassageContentText"
        icon="massageDL.png"
        id="LNMassage"
      />
      
    </Container>
  );
};

export default BasicServices;
