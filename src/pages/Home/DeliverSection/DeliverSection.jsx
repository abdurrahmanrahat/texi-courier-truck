import Car from "../../../assets/deliver/car-deliver.png";
import Logo from "../../../assets/deliver/logo-deliver.png";

const DeliverSection = () => {
  return (
    <div className="relative mt-32 md:mt-64">
      <div className="bg-[#002A54] h-[130px] md:h-[250px] w-full "></div>
      <div className="p-2 md:p-8 flex gap-4 absolute -top-24 md:-top-52">
        <div>
          <img src={Car} className="" alt="" />
        </div>
        <div className="md:ml-24 flex flex-col gap-y-2 md:gap-y-6">
          <h2 className="md:text-[32px] text-[#002A54] font-semibold">
            We deliver, no matter how hard the challenge.
          </h2>
          <img src={Logo} className="md:w-[380px]" alt="" />
          <h4 className="border-b-2 text-white md:text-[32px] md:w-[402px] font-semibold">
            Kennards Hire Case Study
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DeliverSection;
