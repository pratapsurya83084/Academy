import React from "react";

const Heading = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Blue Image */}
      <div className="absolute left-0 top-[120px] transform -translate-y-1/2 mt-4 animate-move-x-reverse">
        <img
          className="w-16 md:w-24 lg:w-32 m-2 h-7"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
          alt="Polygon Blue"
        />
      </div>
      <div className="sm:text-xl  radius-yellow font-bold bg-custom-brown md:text-2xl text-center text-white p-3 m-10 rounded-3xl">
        Student & Entrepreneurship Decision Revolution Seminar <br />
       <b className="text-yellow-200"> 4-Hour</b> On Online Mode
      </div>
      {/* Yellow Image */}
      <div className="absolute top-2 right-0  transform -translate-y-1/2 mt-4 animate-move-x">
        <img
          className="w-16 md:w-24 lg:w-32 m-2  h-7"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
          alt="Polygon Green"
        />
      </div>
      
      
    </div>
  );
};

export default Heading;
