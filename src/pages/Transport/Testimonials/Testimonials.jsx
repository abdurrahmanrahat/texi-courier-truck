// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testimonials.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import QuoteImg from "../../../assets/quote.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-white shadow-md text-black py-12 px-4">
      <h2 className="text-[32px] text-[#002A54] font-semibold ml-4 md:ml-16">
        Testimonials
      </h2>

      {/* slide */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="text-[#002A54] md:flex gap-16">
                <div className="md:w-1/4 relative">
                  <img src={review.image} alt="" />
                  <div className="absolute -top-10 -right-16">
                    <img src={QuoteImg} alt="" />
                  </div>
                </div>
                <div className="md:w-3/4 mt-8 md:mt-0">
                  <p className="md:text-[24px]  text-justify">{review.desc}</p>
                  <div className="text-[24px] text-end my-6 md:mr-20">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
