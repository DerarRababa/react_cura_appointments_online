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

 
};

class AppointmentsDates extends Component {
  constructor(props) {
    super(props);
    this.state = { slecetedDate: "" };
  }

  swiperRef = null;
  slecetDate = (opject, i) => {
    this.setState({ slecetedDate: opject });
    this.props.handleChange(opject, i);
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
            {this.props.dates.schedule.map((opject, i) => {
              return (
                <button
                  onClick={() => this.slecetDate(opject, i)}
                  key={i + "#" + opject.availability.date}
                  className={`swiper-slide ${
                    this.state.slecetedDate == opject
                      ? " bg-blue-500 text-white"
                      : "bg-white shadow-md"
                  } px-2 py-2 whitespace-nowrap cursor-pointer rounded-lg flex flex-col text-sm items-center w-[100px] m-1 bg-white text-black shadow-md
                     transition  delay-100 hover:text-white hover:bg-blue-500 duration-300`}
                >
                  <span className="font-semibold text-sm">
                    {opject.availability.day.substring(0, 3).toUpperCase()}
                  </span>
                  <span className="text-base font-light leading-5 mt-1">
                    {opject.availability.date.split("-")[0]}
                  </span>
                </button>
              );
            })}
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
