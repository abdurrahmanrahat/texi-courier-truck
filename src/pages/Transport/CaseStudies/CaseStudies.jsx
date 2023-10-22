import "./Case.css";

import Img1 from "../../../assets/swift-page/case/case-1.png";
import Img2 from "../../../assets/swift-page/case/case-2.png";
import Img3 from "../../../assets/swift-page/case/case-3.png";

const CaseStudies = () => {
  return (
    <div className="bg-[#002A54] case-div py-12">
      <h2 className="text-[36px] font-semibold text-white ml-4 md:ml-16">
        Case Studies
      </h2>

      {/* img div */}
      <div className="bg-white px-4 py-8 my-4 md:flex">
        <div>
          <img src={Img1} className="w-auto" alt="" />
        </div>
        <div>
          <img src={Img2} className="w-auto" alt="" />
        </div>
        <div>
          <img src={Img3} className="w-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
