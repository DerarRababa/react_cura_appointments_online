import React, { Component } from "react";
import AwesomeSwiper from "react-awesome-swiper";
import "./appointment.css";
import buttoPrev from "./images/left-arrow.svg";
import buttonNext from "./images/right-arrow.svg";

//this config is same as idangrous swiper
const config = {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: false,
  // Enable lazy loading
  lazy: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },

  on: {
    slideChange: function () {
      console.log(this.activeIndex);
    },
  },
};
class AppointmentsDates extends Component {
  swiperRef = null;
  goNext = () => {
    //use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  };
  render() {
    return (
      <article className=" relative">
        <AwesomeSwiper
          ref={(ref) => (this.swiperRef = ref)}
          config={config}
          className="relative px-6"
        >
          <section className="swiper-wrapper">
            {(() => {
              const arr = [];
              for (let i = 0; i < 10; i++) {
                arr.push(
                  <button className="swiper-slide px-2 w-12 py-2 cursor-pointer mt-1 rounded-lg flex flex-col items-center  m-1 bg-white text-black shadow-md">
                    <span  className="font-semibold text-sm">WED</span>
                    <span  className="text-base font-light leading-5 mt-1">24</span>
                  </button>
                );
              }
              return arr;
            })()}
          </section>
        </AwesomeSwiper>
        <button className="button-prev absolute -left-4 top-7 z-10">
          <img src={buttoPrev} />
        </button>
        <button className="button-next absolute -right-4 top-7 z-10">
          <img src={buttonNext} />
        </button>
      </article>
    );
  }
}

export default AppointmentsDates;
