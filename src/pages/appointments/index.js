import React, { Component } from "react";
import AppointmentsDates from "./-AppointmentsDates";

import AppointmentsTimes from "./-AppointmentsTimes";

function Appointments() {
  return (
    <div  className="bg-white p-4 flex items-center justify-center min-h-screen">
      <main  className="w-96 max-w-full">
        <h1  className="font-semibold text-xl mb-1">Schedule Appointment</h1>
        <section  className="border-2 border-gray rounded-xl w-full px-7 py-4 hover:shadow-xl transition  delay-100 duration-300">
          <h4  className="flex justify-between items-center border-b-2 border-gray pb-2">
            <span  className="font-semibold text-base">Fees</span>
            <span  className="text-gray">85$</span>
          </h4>
          <section  className="mt-2">
            <h4  className="font-semibold text-base">Schedule</h4>
            <article  className=" h-16">
              <AppointmentsDates />
            </article>
          </section>
          <section  className="mt-2">
          <h4  className="font-semibold text-base">Choose time</h4>
<article  className=" min-h-[25px]">
          <AppointmentsTimes/>
          <p  className=" text-sm text-gray flex items-center"> will appear the available times when you slected day</p>
        </article>
        </section>
        </section>
        
      <button
       
        className="mt-4 w-full text-white bg-blue-500 rounded-lg py-3 flex items-center justify-center"
      >
        <span className="px-3"> Book Appointment </span>
       
      </button>
      </main>
    </div>
  );
}

export default Appointments;
