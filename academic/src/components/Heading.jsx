import React from "react";

const Heading = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Blue Image */}
      <div className="absolute left-0 top-[120px] transform -translate-y-1/2 mt-4 animate-move-x-reverse">
        {/* <img
          className="w-16 md:w-24 lg:w-32 m-2 h-7"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
          alt="Polygon Blue"
        /> */}
        <svg xmlns="http://www.w3.org/2000/svg" className="pl-8 relative bottom-0 top- sm:bottom-4" width="70" height="50" viewBox="0 0 26 28" fill="none"><path d="M0.962914 27.9871L0.962915 0.0613831L25.1473 14.0243L0.962914 27.9871Z" fill="#0067DE"></path></svg>
      </div>
      <div className="sm:text-xl  radius-yellow font-bold bg-custom-brown md:text-2xl text-center text-white p-3 m-10 rounded-3xl">
        Student & Entrepreneurship Decision Revolution Seminar <br />
       <b className="text-yellow-200"> 4-Hour</b> On Online Mode
      </div>
      {/* Yellow Image */}
      <div className="absolute top-2 right-0  transform -translate-y-1/2 mt-4 animate-move-x">
        {/* <img
          className="w-16 md:w-24 lg:w-32 m-2  h-7"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
          alt="Polygon Green"
        /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 27 28" fill="none"><path d="M0.034542 7.60999L26.9435 0.14317L19.9555 27.1804L0.034542 7.60999Z" fill="#FFC621"></path></svg>
      </div>
      
      
    </div>
  );
};

export default Heading;
