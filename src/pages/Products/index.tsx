import { lazy } from "react";
import PageIntro from "../../components/PageIntro";
import ProductCarousel from "../../components/ProductCarousel";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

// Product names are passed as titles and fall through t() untranslated.
const PRODUCTS = [
  { title: "D+Sérum", content: "titleHydraulicFacialContentText", icon: "D+Serum.jpeg", id: "d-plus-serum" },
  { title: "M Sérum", content: "titlecleanFacialContentText", icon: "M Serum.jpeg", id: "m-serum" },
  { title: "Génesis 1", content: "titleSpecialFacialDermapenContentText", icon: "Génesis 1.jpeg", id: "genesis-1" },
  { title: "Génesis 2", content: "titleSpecialFacialRadioFContentText", icon: "Génesis 2.jpeg", id: "genesis-2" },
  { title: "Yanka C", content: "titleDespigmentFacialContentText", icon: "Yanka C.jpeg", id: "yanka-c" },
  { title: "AH8 Axtaxantina", content: "titleAcneFacialContentText", icon: "AH8 Axtaxantina.jpeg", id: "ah8-axtaxantina" },
  { title: "Porcelaine 50+", content: "titleDermaplaningFacialContentText", icon: "Porcelaine 50+.jpeg", id: "porcelaine-50-plus" },
  { title: "Porcelaine 360", content: "titleAcneFacialContentText", icon: "Porcelaine 360.jpeg", id: "porcelaine-360" },
  { title: "Porcelaine Powder 30", content: "titleDermaplaningFacialContentText", icon: "Porcelaine Powder 30.jpeg", id: "porcelaine-powder-30" },
  { title: "Protector solar en Mousse 50+", content: "titleAcneFacialContentText", icon: "Protector solar en Mousse 50+.jpeg", id: "protector-solar-en-mousse-50-plus" },
  { title: "Protector solar URIAGE 50+", content: "titleDermaplaningFacialContentText", icon: "Protector solar URIAGE.jpeg", id: "protector-solar-uriage-50-plus" },
];

const Products = () => (
  <Container>
    <ScrollToTop />
    <PageIntro title="titleProductContent" content="titleProductContentText" />
    <ProductCarousel items={PRODUCTS} />
  </Container>
);

export default Products;
