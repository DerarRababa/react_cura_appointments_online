import React, { useState } from "react";

function AppointmentsTimes(props) {
  const showWarningMessage = (text) => {
    alert(text);
  };

  const [slecetedTime, setSlecetedTime] = useState("");

  const slecetTime = (time) => {
    setSlecetedTime(time);
    props.slecetTime(time);
  };

  return (
    <section className="flex flex-wrap">
      {props.unavailableTimes.unavailableTimes.map((time, i) => {
        return (
          <button
            onClick={() =>
              showWarningMessage(
                `The detector is not available from ${time.from_unix} to ${time.to_unix}`
              )
            }
            title={`the detector is not available from ${time.from_unix} to ${time.to_unix}`}
            className="px-2 py-2 cursor-pointer text-$gray bg-white dark:bg-slate-500  rounded-lg flex flex-col items-center w-24 m-1
                    "
            key={"#" + i}
          >
            {time.from_unix}
          </button>
        );
      })}

      {props.availableTimes.availableTimes.map((time, i) => {
        return (
          <button
            key={i}
            className={`${
              slecetedTime == time
                ? " bg-blue-500 text-white "
                : "bg-white dark:bg-slate-800  shadow-sm "
            } px-2 py-2 whitespace-nowrap cursor-pointer rounded-lg flex flex-col text-sm items-center w-[100px] m-1 shadow-sm dark:shadow-white
          transition  delay-100  duration-300`}
            onClick={() => slecetTime(time)}
            title={`the detector is not available from ${time.from_unix} to ${time.to_unix}`}
          >
            {time.from_unix} 
          </button>
        );
      })}
    </section>
  );
}
export default AppointmentsTimes;
