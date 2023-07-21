// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TarjetaRed from "./TarjetaRed";
import TarjetaCoin from "./TarjetaCoin";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function SliderTarjetas() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >

            <SwiperSlide>
                <TarjetaCoin/>
            </SwiperSlide>

            <SwiperSlide>
                <TarjetaRed/>
            </SwiperSlide>

      </Swiper>
    </>
  )
}
