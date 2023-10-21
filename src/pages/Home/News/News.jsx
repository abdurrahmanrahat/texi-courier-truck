import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./New.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="bg-[#ED1B24] text-white p-2 md:p-8 my-12">
      <h4 className="text-2xl font-semibold ml-2 md:ml-0">News</h4>

      <div className="p-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            840: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {news.map((n) => (
            <SwiperSlide key={n.id}>
              <div className="md:w-[340px] bg-white text-black rounded-se-[30px] rounded-bl-[30px] p-4">
                <img src={n.image} alt="" className="" />
                <div className="my-2">
                  <h2 className="text-xl font-semibold mb-2">{n.title}</h2>
                  <p>{n.desc}</p>
                </div>
                <div className="flex justify-end">
                  <button className="hover:border-b-2 duration-500 font-semibold text-[#ED1B24] border-[#ED1B24]">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
