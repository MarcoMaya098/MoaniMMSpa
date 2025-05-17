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

const Products = () => {
   return (
      <Container>
        <ScrollToTop />
        
  
        <DesciptionBlock
          title="titleProductContent"
          content="titleProductContentText"
        />
        
        <ContentBlock
          direction="left"
          title="D+Sérum"
          content="titleHydraulicFacialContentText"
          icon="D+Serum.jpeg"
          id="HydraulicFacial"
        />
  
        <ContentBlock
          direction="right"
          title="M Sérum"
          content="titlecleanFacialContentText"
          icon="M Serum.jpeg"
          id="cleanFacial"
        />
  
        <ContentBlock
          direction="left"
          title="Génesis 1"
          content="titleSpecialFacialDermapenContentText"
          icon="Génesis 1.jpeg"
          id="SpecialFacialDermapen"
        />
  
        <ContentBlock
          direction="right"
          title="Génesis 2"
          content="titleSpecialFacialRadioFContentText"
          icon="Génesis 2.jpeg"
          id="SpecialFacialRadioF"
        />
  
        <ContentBlock
          direction="left"
          title="Yanka C"
          content="titleDespigmentFacialContentText"
          icon="Yanka C.jpeg"
          id="DespigmentFacial"
        />
  
        <ContentBlock
          direction="right"
          title="AH8 Axtaxantina"
          content="titleAcneFacialContentText"
          icon="AH8 Axtaxantina.jpeg"
          id="AcneFacial"
        />
  
        <ContentBlock
          direction="left" 
          title="Porcelaine 50+"
          content="titleDermaplaningFacialContentText"
          icon="Porcelaine 50+.jpeg"
          id="DermaplaningFacial"
        />

        <ContentBlock
          direction="right"
          title="Porcelaine 360"
          content="titleAcneFacialContentText"
          icon="Porcelaine 360.jpeg"
          id="AcneFacial"
        />
  
        <ContentBlock
          direction="left" 
          title="Porcelaine Powder 30"
          content="titleDermaplaningFacialContentText"
          icon="Porcelaine Powder 30.jpeg"
          id="DermaplaningFacial"
        />

        <ContentBlock
          direction="right"
          title="Protector solar en Mousse 50+"
          content="titleAcneFacialContentText"
          icon="Protector solar en Mousse 50+.jpeg"
          id="AcneFacial"
        />
  
        <ContentBlock
          direction="left" 
          title="Protector solar URIAGE 50+"
          content="titleDermaplaningFacialContentText"
          icon="Protector solar URIAGE.jpeg"
          id="DermaplaningFacial"
        />

  
    
        
      </Container>
    );
};

export default Products;
