import { lazy } from "react";
import PageIntro from "../../components/PageIntro";
import ServiceBlock from "../../components/ServiceBlock";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const SERVICES = [
  { title: "titleHifuContent", content: "titleHifuContentText", icon: "hifu.png", id: "hifu" },
  { title: "titleMorpheusContent", content: "titleMorpheusContentText", icon: "morpheous.jpeg", id: "morpheus" },
  { title: "titleDepilationContent", content: "titleDepilationContentText", icon: "diodo.png", id: "depilation" },
];

const SpecialServices = () => (
  <Container>
    <ScrollToTop />
    <PageIntro title="titleSpecialServiceContent2" content="titleSpecialServiceContentText2" />
    {SERVICES.map((service, i) => (
      <ServiceBlock key={service.id} {...service} index={i + 1} />
    ))}
  </Container>
);

export default SpecialServices;
