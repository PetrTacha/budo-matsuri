import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export const CarouselSlicker = () => {
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    nextArrow: <div className="next-slick-arrow">Next</div>,
    prevArrow: <div className="prev-slick-arrow">Prev</div>,
  };

  return (
    <Slider {...settings}>
      {/* <div>
        <img src={images[0]} alt="Slide 1" />
      </div>
      <div>
        <img src={images[1]} alt="Slide 2" />
      </div>
      <div>
        <img src={images[2]} alt="Slide 3" />
      </div> */}
    </Slider>
  );
};