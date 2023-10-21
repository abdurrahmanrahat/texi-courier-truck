import Support from "../../../assets/info/support 1.png";
import Email from "../../../assets/info/email.png";
import Rate from "../../../assets/info/rate (1).png";
import WareHouse from "../../../assets/info/warehouse (1).png";
import Gmail from "../../../assets/info/email (1).png";

const InfoSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-12">
      {/* onw */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <img src={Support} alt="" />
        <p className="text-[#002A54] mx-8 text-center">
          Call us at anytime on <br /> 1210 779 434
        </p>
      </div>

      {/* two */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <img src={Email} alt="" />
        <p className="text-[#002A54] mx-8 text-center">
          See why more companies prefer Swift
        </p>
      </div>

      {/* three */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <img src={Rate} alt="" />
        <p className="text-[#002A54] mx-8 text-center">
          Email the Team at Swift Transport Courier Division
        </p>
      </div>

      {/* four */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <img src={WareHouse} alt="" />
        <p className="text-[#002A54] mx-8 text-center">
          Email the Team at Swift Containers T. Division
        </p>
      </div>

      {/* five */}
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <img src={Gmail} alt="" />
        <p className="text-[#002A54] mx-8 text-center">
          Visit our warehousing and distribution center
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
