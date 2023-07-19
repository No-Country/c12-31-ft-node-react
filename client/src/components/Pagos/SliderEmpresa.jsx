// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import carCountry from "../../assets/img/CARD_COUNTRY_PAGOS.png"
import carRoja from "../../assets/img/CARD_ROJA_PAGOS.png"
import master from "../../assets/img/MASTER_PAGOS.png"

export default function SliderEmpresa() {
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

            <SwiperSlide>
                <img src={carCountry} alt="country" className="w-40 h-auto"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={carRoja} alt="carRoja" className="w-40 h-auto"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={master} alt="master" className="w-40 h-auto"/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-40 h-[5.5rem] flex justify-center items-center rounded-md bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09]">
                    <p className="text-4xl">+</p>
                </div>
            </SwiperSlide>

      </Swiper>
    </>
  )
}
