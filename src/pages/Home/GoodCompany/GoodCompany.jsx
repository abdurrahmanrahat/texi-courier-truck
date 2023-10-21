import Goodcompany from "../../../assets/good-company.png";

import Img2 from "../../../assets/good-company/image 2.png";
import Img3 from "../../../assets/good-company/image 3.png";
import Img4 from "../../../assets/good-company/image 4.png";
import Img5 from "../../../assets/good-company/image 5.png";
import Img6 from "../../../assets/good-company/image 6.png";
import Img7 from "../../../assets/good-company/image 7.png";

const GoodCompany = () => {
  return (
    <div className="bg-[#ED1B24] p-10 md:flex gap-6 my-12">
      <div className="md:w-1/2 mb-4">
        <h2 className="text-[36px] text-white font-semibold mb-4">
          You’ll be in good company
        </h2>
        <img src={Goodcompany} alt="" />
      </div>

      <div className="md:w-1/2 bg-white  flex items-center justify-center gap-16">
        <div className="flex flex-col gap-y-8">
          <img src={Img2} className="w-24 mx-auto" alt="" />
          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
          <img src={Img5} alt="" />
        </div>

        <div className="flex flex-col gap-y-8">
          <img src={Img6} alt="" />
          <img src={Img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GoodCompany;
