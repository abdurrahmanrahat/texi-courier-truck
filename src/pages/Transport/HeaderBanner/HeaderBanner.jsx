import SwiftPhoto from "../../../assets/swift-page/swift-photo.png";

const HeaderBanner = () => {
  return (
    <div className="relative">
      <img src={SwiftPhoto} className="md:w-full" alt="" />
      <div className="absolute top-10 right-10 text-white">
        <h2 className="text-[22px] md:text-[46px] font-semibold text-end">
          Why Swift Transport
        </h2>
        <p className="md:text-[32px] text-end">
          Here from our loyal customers about why <br /> they’re happy to
          recommend us to you.
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
