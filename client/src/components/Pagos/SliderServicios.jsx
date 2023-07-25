// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { data } from "./data";

function SliderServicios() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {data.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="p-2"
            >
              <div
                className=" bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] rounded-2xl mt-2 shadow-lg shadow-gray-400 w-36"
              >
                <div className="flex gap-3 flex-col  justify-between items-center">
                  <div className="flex justify-center items-center mt-6">
                    <img
                      src={data.img}
                      alt={data.empresa}
                      className="w-16 h-auto"
                    />
                  </div>

                  <p className="text-base">{data.empresa}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SliderServicios;
