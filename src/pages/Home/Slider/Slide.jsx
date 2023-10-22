import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slide.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

// import Image1 from "../../../assets/bannerSlide/banner1.png";
// import Image2 from "../../../assets/bannerSlide/banner2.png";

import { CiMobile3 } from "react-icons/ci";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";

const Slide = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper md:text-right"
      >
        <div
          slot="container-start"
          className="parallax-bg relative"
          style={{
            backgroundImage: "url(https://i.ibb.co/FbP261K/header-banner.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div
            className="title md:mt-[280px] md:ml-[480px]"
            data-swiper-parallax="-300"
          >
            Cheaper delivery costs through innovative vehicle design
          </div>

          <div className="hidden bg-transparent w-40 text-white md:flex justify-end items-center absolute top-8 right-10">
            <CiMobile3 className="text-5xl" />
            <p className="text-start">
              Call Us <br /> 1300 779 438
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end absolute top-24 right-10">
            <ul className="flex gap-6 text-[13px]">
              <ActiveLink to="/transport">
                <li>WHY SWIFT TRANSPORT</li>
              </ActiveLink>

              <ActiveLink to="/">
                <li>FLEET</li>
              </ActiveLink>

              <li>COMPANY POLICIES</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
            <div className="flex gap-6 text-[16px] mt-4">
              <p className="bg-[#ED1B24] py-1 px-2 rounded-md">
                Swift Intermodal
              </p>
              <p>Container Transport Solutions</p>
              <p>Complete Warehousing Solutions</p>
            </div>
          </div>

          <div className="text md:ml-[860px] " data-swiper-parallax="-100">
            <p>
              OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU&lsquo;LL BE
              PLEASANTLY SUPRISED
            </p>
            <button className="md:mt-7 md:mr-14 text-xl font-semibold border-b-2">
              Taxi and Courier truck
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title md:mt-[280px] md:ml-[480px]"
            data-swiper-parallax="-300"
          >
            Cheaper delivery costs through innovative vehicle design
          </div>

          <div className="hidden bg-transparent w-40 text-white md:flex justify-end items-center absolute top-8 right-10">
            <CiMobile3 className="text-5xl" />
            <p className="text-start">
              Call Us <br /> 1300 779 438
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end absolute top-24 right-10">
            <ul className="flex gap-6 text-[13px]">
              <ActiveLink to="/transport">
                <li>WHY SWIFT TRANSPORT</li>
              </ActiveLink>

              <ActiveLink to="/">
                <li>FLEET</li>
              </ActiveLink>

              <li>COMPANY POLICIES</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
            <div className="flex gap-6 text-[16px] mt-4">
              <p className="bg-[#ED1B24] py-1 px-2 rounded-md">
                Swift Intermodal
              </p>
              <p>Container Transport Solutions</p>
              <p>Complete Warehousing Solutions</p>
            </div>
          </div>

          <div className="text md:ml-[860px] " data-swiper-parallax="-100">
            <p>
              OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU&lsquo;LL BE
              PLEASANTLY SUPRISED
            </p>
            <button className="md:mt-7 md:mr-14 text-xl font-semibold border-b-2">
              Taxi and Courier truck
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="title md:mt-[280px] md:ml-[480px]"
            data-swiper-parallax="-300"
          >
            Cheaper delivery costs through innovative vehicle design
          </div>

          <div className="hidden bg-transparent w-40 text-white md:flex justify-end items-center absolute top-8 right-10">
            <CiMobile3 className="text-5xl" />
            <p className="text-start">
              Call Us <br /> 1300 779 438
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end absolute top-24 right-10">
            <ul className="flex gap-6 text-[13px]">
              <ActiveLink to="/transport">
                <li>WHY SWIFT TRANSPORT</li>
              </ActiveLink>

              <ActiveLink to="/">
                <li>FLEET</li>
              </ActiveLink>

              <li>COMPANY POLICIES</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
            <div className="flex gap-6 text-[16px] mt-4">
              <p className="bg-[#ED1B24] py-1 px-2 rounded-md">
                Swift Intermodal
              </p>
              <p>Container Transport Solutions</p>
              <p>Complete Warehousing Solutions</p>
            </div>
          </div>

          <div className="text md:ml-[860px] " data-swiper-parallax="-100">
            <p>
              OUR 1 TONNE VEHICLES CAN HANDLE WHAT OTHERS CAN’T. YOU&lsquo;LL BE
              PLEASANTLY SUPRISED
            </p>
            <button className="md:mt-7 md:mr-14 text-xl font-semibold border-b-2">
              Taxi and Courier truck
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;
