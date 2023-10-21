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
          className="parallax-bg"
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
