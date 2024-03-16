// import Swiper JS
import React from "react";
import "swiper/css";
import Image from "next/image";
// import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import 'swiper/css/navigation';

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const Carousel = () => {
  const images = [
    "/ucinkujici-photo/aikidō.jpg",
    "/ucinkujici-photo/battōjutsu.jpg",
    "/ucinkujici-photo/iaidō.jpg",
    "/ucinkujici-photo/japonska-kaligrafie.jpg",
    "/ucinkujici-photo/japonsky-caj.jpg",
    "/ucinkujici-photo/jūdō.jpg",
    "/ucinkujici-photo/judo1.jpg",
    "/ucinkujici-photo/katori-shintō-ryū.jpg",
    "/ucinkujici-photo/kendō.jpg",
    "/ucinkujici-photo/kenjutsu-stylu-Kashima-no-tachi.jpg",
    "/ucinkujici-photo/kobudō.jpg",
    "/ucinkujici-photo/kyūdō.jpg",
    "/ucinkujici-photo/naginata-dō.jpg",
    "/ucinkujici-photo/nihontō.jpg",
    "/ucinkujici-photo/ninjutsu.jpg",
    "/ucinkujici-photo/okinawske-karate-dō.jpg",
    "/ucinkujici-photo/restaurace-Miyabi.jpg",
    "/ucinkujici-photo/shakuhachi.jpg",
    "/ucinkujici-photo/shintō-musō-ryu-jō-a-pripojene-skoly.jpg",
    "/ucinkujici-photo/taijutsu.jpg",
  ];

  return (
    <div className="h-1/3 mb-10">
      <Swiper
        effect={"coverflow"}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={0}
        speed={4000}
        loop={true}
        className="mySwiper"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoHeight={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide
            style={{ width: "auto", height: "30rem", position: "relative" }}
            key={index}
          >
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
