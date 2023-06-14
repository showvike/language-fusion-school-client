// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Parallax } from "swiper";

import slider1 from "../../../assets/slider-1.png";
import slider2 from "../../../assets/slider-2.png";
import slider3 from "../../../assets/slider-3.png";
import "./Slider.css";

export default function Slider() {
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
        className="mySwiper h-screen"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-slider-texture"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="h-screen flex flex-col justify-center items-center gap-12">
            <div className="title" data-swiper-parallax="-300">
              <h1 className="font-bold md:text-5xl">
                Learn Different Types of Languages
              </h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <img
                className="w-48 md:w-96 h-48 md:h-96 object-cover rounded-full"
                src={slider1}
              />
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:w-1/2 mx-auto text-center font-medium md:text-lg">
                Learn Different Types of Languages opens up a world of
                opportunities for individuals interested in various fields.
                Natural languages such as English, Spanish, Mandarin, and French
                enable effective communication between people from different
                cultures. These languages not only facilitate everyday
                interactions but also foster cultural understanding and
                collaboration.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen flex flex-col justify-center items-center gap-12">
            <div className="title" data-swiper-parallax="-300">
              <h1 className="font-bold md:text-5xl">
                Test Your Skills to Examine
              </h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <img
                className="w-48 h-48 md:w-96 md:h-96 object-contain rounded-full"
                src={slider2}
              />
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:w-1/2 mx-auto text-center font-medium md:text-lg">
                Test Your Skills to Examine your abilities and push your limits
                is an essential part of personal and professional growth. By
                engaging in challenging tasks and assessments, you gain valuable
                insights into your strengths, weaknesses, and areas for
                improvement.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-screen flex flex-col justify-center items-center gap-12">
            <div className="title" data-swiper-parallax="-300">
              <h1 className="font-bold md:text-5xl">
                Collect Your Achievement to Prove
              </h1>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              <img
                className="w-48 h-48 md:w-96 md:h-96 object-contain rounded-full"
                src={slider3}
              />
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className="md:w-1/2 mx-auto text-center font-medium md:text-lg">
                Collect Your Achievement to Prove your accomplishments and
                showcase your abilities to the world. Throughout your journey of
                personal and professional development, it is important to
                acknowledge and celebrate your successes.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
