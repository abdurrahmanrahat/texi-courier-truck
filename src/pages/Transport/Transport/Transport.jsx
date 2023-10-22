import InfoSection from "../../Home/InfoSection/InfoSection";
import CaseStudies from "../CaseStudies/CaseStudies";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import HeaderSection from "../HeaderSection/HeaderSection";
import SwiftSection from "../SwiftSection/SwiftSection";
import Testimonials from "../Testimonials/Testimonials";
import WhySwift from "../WhySwift/WhySwift";

const Transport = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>

      <HeaderBanner></HeaderBanner>

      <SwiftSection></SwiftSection>

      <WhySwift></WhySwift>

      <CaseStudies></CaseStudies>

      <Testimonials></Testimonials>

      <InfoSection></InfoSection>
    </div>
  );
};

export default Transport;
