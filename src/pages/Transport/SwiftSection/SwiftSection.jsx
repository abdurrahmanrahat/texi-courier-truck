import Icon1 from "../../../assets/swift-page/icon/file-case.png";
import Icon2 from "../../../assets/swift-page/icon/review.png";

const SwiftSection = () => {
  return (
    <div className="bg-[#D4D4D4] p-8">
      <p className="text-[#002A54] text-[16px]">Home / Why Swift Transport</p>

      <div className="bg-[#002A54] p-8 my-8 rounded-2xl md:flex">
        {/* text */}
        <div className="md:w-1/2 text-white flex flex-col gap-y-4">
          <h4 className="underline text-[24px] md:text-[46px] font-semibold">
            Why Swift Transport
          </h4>
          <p className="md:text-[30px]">
            Here from our loyal customers about why they’re happy to recommend
            us to you.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text.
          </p>
          <div>
            <button className="bg-[#B0B0B0] md:text-[28px] text-[#002A54] font-semibold px-8 py-4 rounded-md">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* box */}
        <div className="w-1/2 flex md:flex-col gap-4 md:gap-12 mt-6 md:mt-0">
          <div className="bg-[#E62933] px-8 py-6 md:py-14  md:mx-36 rounded-xl flex flex-col items-center justify-center shadow-white shadow-md">
            <img src={Icon1} className="" alt="" />
            <p className="text-white text-md">Case Study</p>
          </div>
          <div className="bg-[#E62933] px-8 py-6 md:py-14  md:mx-36 rounded-xl flex flex-col items-center justify-center shadow-white shadow-md">
            <img src={Icon2} className="" alt="" />
            <p className="text-white text-md">Testimonials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftSection;
