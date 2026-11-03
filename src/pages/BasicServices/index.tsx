import { lazy } from "react";
import PageIntro, { GroupHeading } from "../../components/PageIntro";
import ServiceBlock from "../../components/ServiceBlock";
import GroupNav from "../../components/GroupNav";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const FACIALS = [
  { title: "titleHydraulicFacialContent", content: "titleHydraulicFacialContentText", icon: "facialH.png", id: "HydraulicFacial" },
  { title: "titlecleanFacialContent", content: "titlecleanFacialContentText", icon: "facialC.png", id: "cleanFacial" },
  { title: "titleSpecialFacialDermapenContent", content: "titleSpecialFacialDermapenContentText", icon: "facialDermapen.png", id: "SpecialFacialDermapen" },
  { title: "titleSpecialFacialRadioFContent", content: "titleSpecialFacialRadioFContentText", icon: "facialRF.png", id: "SpecialFacialRadioF" },
  { title: "titleDespigmentFacialContent", content: "titleDespigmentFacialContentText", icon: "facialDespig.jpg", id: "DespigmentFacial" },
  { title: "titleAcneFacialContent", content: "titleAcneFacialContentText", icon: "facialAcne.png", id: "AcneFacial" },
  { title: "titleDermaplaningFacialContent", content: "titleDermaplaningFacialContentText", icon: "dermaplaning.png", id: "DermaplaningFacial" },
];

const MASSAGES = [
  { title: "titlerelaxMassageContent", content: "titlerelaxMassageContentText", icon: "massageRelaxing.png", id: "relaxMassage" },
  { title: "titleDescMassageContent", content: "titleDescMassageContentText", icon: "massageDesco.png", id: "descMassage" },
  { title: "titleReductMassageContent", content: "titleReductMassageContentText", icon: "massageReduce.png", id: "reductMassage" },
  { title: "titleLNMassageContent", content: "titleLNMassageContentText", icon: "massageDL.png", id: "LNMassage" },
];

const GROUPS = [
  { id: "facials", label: "facialsGroup" },
  { id: "massage", label: "massagesGroup" },
];

const BasicServices = () => (
  <Container>
    <ScrollToTop />
    <PageIntro title="titleBasicServiceContent2" content="titleBasicServiceContentText2" />
    <GroupNav groups={GROUPS} />
    <GroupHeading title="facialsGroup" id="facials" count={FACIALS.length} />
    {FACIALS.map((facial, i) => (
      <ServiceBlock key={facial.id} {...facial} index={i + 1} />
    ))}
    <GroupHeading title="massagesGroup" id="massage" count={MASSAGES.length} />
    {MASSAGES.map((massage, i) => (
      <ServiceBlock key={massage.id} {...massage} index={i + 1} />
    ))}
  </Container>
);

export default BasicServices;
