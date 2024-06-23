import React, { useState, useEffect } from "react";
const initialTotalSeconds = 90;
const TimeEnroll = () => {
  const [totalSeconds, setTotalSeconds] = useState(() => {
    const savedTime = localStorage.getItem("countdownTotalSeconds");
    return savedTime ? parseInt(savedTime, 10) : initialTotalSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds > 0) {
          localStorage.setItem("countdownTotalSeconds", prevTotalSeconds - 1);
          return prevTotalSeconds - 1;
        } else {
          localStorage.setItem("countdownTotalSeconds", initialTotalSeconds);
          return initialTotalSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate minutes and seconds
  // const minutes = Math.floor(totalSeconds / 90);
  const seconds = totalSeconds % 90;

  // current day

  // To show the date and day for the 15th day from the current date, you can modify the JavaScript code as follows:

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 16);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <div>
          <h2 className=" font-bold p-2">"Discover what waits for you"</h2>
        </div>
        <div>
          <h1 className=" font-bold p-2">Enrolling Going on</h1>
        </div>
        <div>
          <h2 className=" font-bold">Your Basic English and Me</h2>
        </div>
        <div>
          <h1 className="text-red-500 font-bold p-2">
            STARTS ON {formattedDate} (8:00 AM)
          </h1>
        </div>
        <div>
          <h1 className="font-bold">Take Action with Fast Decision Maker</h1>
        </div>
        <div>
          <h1 className="text-xl font-bold p-2">
            Register Now in the Next 90 seconds to change <br /> your first
            decision move
          </h1>
        </div>
      </div>
      {/* Timer box */}

      <div className="radius-yellow font-bold h-32 w-32 py-7 mt-10 text-center bg-custom-brown rounded-2xl">
        <span className="font-bold text-2xl ">
          {String(seconds).padStart(2, "0")}
        </span>{" "}
        <br />
        SECONDS
      </div>
    </div>
  );
};

export default TimeEnroll;
