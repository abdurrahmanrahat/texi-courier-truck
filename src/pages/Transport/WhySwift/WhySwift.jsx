import "./WhySwift.css";

import WhySwiftImg from "../../../assets/swift-page/why-swift-photo.png";
import WhySwiftImgMobile from "../../../assets/swift-page/why-swift-mobile.png";

const WhySwift = () => {
  return (
    <div className="swift-div bg-[#E62933] md:flex py-8 md:flex-row-reverse">
      {/* img div */}
      <div className="md:-ml-10">
        <img src={WhySwiftImg} className="hidden md:block" alt="" />
        <img src={WhySwiftImgMobile} className="md:hidden" alt="" />
      </div>

      {/* content div */}
      <div className="md:w-1/2 bg-white m-4 md:m-0 -mt-10  md:mt-10 md:my-16 md:ml-10 p-6 md:p-12 rounded-xl">
        <h2 className="text-[18px] md:text-[32px] text-[#002A54] mt-6 font-semibold">
          Why Swift
        </h2>
        <div className="text-[12px] md:text-[24px] text-[#002A54] flex flex-col gap-y-5 mt-4">
          <p>
            As a supplier we are a responsive business partner that can ensure
            quality and supply. We value strong relationships with our customers
            and believe that commercial relationships are a learnt skill.
          </p>
          <p>
            Our integrated supply chain helps us to ensure a high standard of
            product quality and service delivery. This reduces the potential
            need for rework, increases reliability of service and saves our
            customers time and money.
          </p>
          <p>
            Swift Transport is a market leader providing flexible,
            client-focused on demand transport and 3PL services complimented by
            industry leading technology.
          </p>
          <p>
            We offer solutions that simultaneously improve efficiencies,
            consistency, reliability and bottom line savings for our
            clients&apos; businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySwift;
