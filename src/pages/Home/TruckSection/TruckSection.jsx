import TruckImg from "../../../assets/truck.png";

const TruckSection = () => {
  return (
    <div className="md:mt-52 md:mb-12 mt-32 mb-6 relative">
      <div className="bg-[#ED1B24] h-[160px] md:h-[520px]"></div>
      <div className="absolute -top-20 md:-top-40">
        <img className="" src={TruckImg} alt="" />
        <div className="w-[200px] md:w-[540px] h-[200px] md:h-[400px] bg-[#072953] rounded-xl p-2 md:p-10 flex flex-col gap-y-2 md:gap-y-8 text-white absolute left-2 -bottom-4 md:left-10 md:bottom-10">
          <h2 className="md:text-3xl font-semibold">
            A fleet capable of much more than you’d think
          </h2>
          <p className="text-[10px] md:text-[16px]">
            With a diverse range of utes, trucks and semi-trailers, Swift
            Transport is capable of much more than you&apos;d think. Combine our
            versatile fleet wth our industry leading technology and
            &apos;can&lsquo;do&apos; attitude for a winning logistics
            partnership with your organization.
          </p>
          <div className="flex justify-end">
            <button className="md:text-3xl font-semibold border-b-2 md:w-36">
              Why Swift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckSection;
