import { lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IntroContent from "../../content/IntroContent.json";
import DescriptionContent from "../../content/DescriptionContent.json";
import BasicServiceContent from "../../content/BasicServiceContent.json";
import MissionContent from "../../content/MisionContent.json";
import VisionContent from "../../content/VisionContent.json";
import SpecialServiceContent from "../../content/SpecialServiceContent.json";
import ProductContent from "../../content/ProductContent.json";
import VisitContent from "../../content/visitContent.json";

import IntroContentBlock from "../../components/IntroContentBlock";
import VisitBlock from "../../components/VisitBlock";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const FeaturedServices = lazy(() => import("../../components/FeaturedServices"));
const MissionVision = lazy(() => import("../../components/MissionVision"));
const BookingBlock = lazy(() => import("../../components/BookingBlock"));

const Home = () => {
  const location = useLocation<{ scrollTo?: string } | undefined>();

  // Header links from other pages (e.g. "Visítanos") land here with the section to show.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const timer = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <Container>
      <ScrollToTop />
      <IntroContentBlock
        direction="left"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="mascarilla.png"
        secondaryIcon="moani-background2.jpeg"
        id="intro"
      />
      <FeaturedServices
        id="services"
        title="featuredServicesTitle"
        content="featuredServicesText"
        items={[
          {
            title: BasicServiceContent.title,
            text: BasicServiceContent.text,
            icon: "masaje.png",
            redirect: BasicServiceContent.redirect,
          },
          {
            title: SpecialServiceContent.title,
            text: SpecialServiceContent.text,
            icon: "mision.png",
            redirect: SpecialServiceContent.redirect,
          },
          {
            title: ProductContent.title,
            text: ProductContent.text,
            icon: "producto.png",
            redirect: ProductContent.redirect,
          },
        ]}
      />
      <MissionVision
        id="about"
        icon="about.png"
        title={DescriptionContent.title}
        content={DescriptionContent.text}
        items={[
          { title: MissionContent.title, text: MissionContent.text },
          { title: VisionContent.title, text: VisionContent.text },
        ]}
      />
      <VisitBlock
        direction="left"
        title={VisitContent.title}
        content={VisitContent.text}
        section={VisitContent.section}
        icon="moani-background.jpeg"
        id="visit"
      />
      <BookingBlock id="booking" icon="vision.png" />
    </Container>
  );
};

export default Home;
