import React, { useState ,useEffect} from "react";
import AppointmentsDates from "./-AppointmentsDates";

import AppointmentsTimes from "./-AppointmentsTimes";
import { fetchData } from '../../store/actions'

const Appointments = ({ dates,dispatch }) => {
  const [selectedAvailabilityDate, setSelectedAvailabilityDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState("");
  const [unavailableTimes, setUnAvailableTimes] = useState("");

  const [selectedAvailabilityTime, setSelectedAvailabilityTime] = useState("");

  const parentHandleChange = (opject, i) => {
    setSelectedAvailabilityDate(opject);
    setAvailableTimes({
      availableTimes: opject.available.map((date) => {
        const availableTimes = {
          from_unix: new Date(date.from_unix).toLocaleTimeString(),
          to_unix: new Date(date.to_unix).toLocaleTimeString(),
        };
        return availableTimes;
      }),
    });

    setUnAvailableTimes({
      unavailableTimes: opject.unavailable.map((date) => {
        const unavailableTimes = {
          from_unix: new Date(date.from_unix).toLocaleTimeString(),
          to_unix: new Date(date.to_unix).toLocaleTimeString(),
        };
        return unavailableTimes;
      }),
    });
  };

  const slecetTime = (time) => {
    console.log(time);
    setSelectedAvailabilityTime(time);
  };



  useEffect(() => {
    fetchData(dispatch)
}, []);


  return (
    <div className="bg-white p-4 flex items-center justify-center min-h-screen">
      <main className="w-96 max-w-full">
        <h1 className="font-semibold text-xl mb-1">Schedule Appointment</h1>
        <section className="border-2 border-gray rounded-xl w-full px-7 py-4 hover:shadow-xl transition  delay-100 duration-300">
          <h4 className="flex justify-between items-center border-b-2 border-gray pb-2">
            <span className="font-semibold text-base">Fees</span>
            <span className="text-gray">85$</span>
          </h4>
          <section className="mt-2">
            <h4 className="font-semibold text-base">Schedule</h4>
            <article className=" h-16">
              {dates ? ( 
              <AppointmentsDates
                handleChange={parentHandleChange}
                dates={dates}
              />
              ) : (
              
                <div className="animate-pulse h-full flex space-x-4">
                      <div className=" h-full  w-[70px] m-1 bg-slate-200 rounded col-span-2"></div>
                      <div className=" h-full  w-[70px] m-1 bg-slate-200 rounded col-span-2"></div>
                      <div className=" h-full  w-[70px] m-1 bg-slate-200 rounded col-span-2"></div>
                      <div className=" h-full  w-[70px] m-1 bg-slate-200 rounded col-span-2"></div>
              </div>

              )}
             
            </article>
          </section>
          <section className="mt-2">
            <h4 className="font-semibold text-base">Choose time</h4>
            <article className=" min-h-[25px]">
              {availableTimes != "" ? (
                <AppointmentsTimes
                  slecetTime={slecetTime}
                  availableTimes={availableTimes}
                  unavailableTimes={unavailableTimes}
                />
              ) : (
                <p className=" text-sm text-gray flex items-center">
                  will appear the available times when you slected day
                </p>
              )}
            </article>
          </section>
        </section>

        <button
          className={` ${
            selectedAvailabilityDate && selectedAvailabilityTime
              ? " bg-blue-500"
              : " bg-gray-300"
          } text-white mt-4 w-full  rounded-lg py-3 flex items-center justify-center`}
        >
          <span className="px-3"> Book Appointment </span>
        </button>
      </main>
    </div>
  );
};

export default Appointments;
