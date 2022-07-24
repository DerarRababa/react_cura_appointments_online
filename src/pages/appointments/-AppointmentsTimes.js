function AppointmentsTimes() {
    return (
        <section  className="flex flex-wrap">
        {(() => {
              const arr = [];
              for (let i = 0; i < 5; i++) {
                arr.push(
                    <button
        
                     className="px-2 py-2 whitespace-nowrap cursor-pointer rounded-lg flex flex-col text-sm items-center w-[100px] m-1 bg-white text-black shadow-md
                    transition  delay-100 hover:text-white hover:bg-blue-500 duration-300"
                   
                  >
                   12:55:00 AM
                  </button>
                );
              }
              return arr;
            })()}
       
      </section>
    )
}
export default AppointmentsTimes;
