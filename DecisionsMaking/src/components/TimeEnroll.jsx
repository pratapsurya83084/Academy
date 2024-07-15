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

  const [displayDate, setDisplayDate] = useState('');

  useEffect(() => {
    const updateDateDisplay = () => {
      const today = new Date();
      let targetDate = new Date('2024-07-07');

      // If the current date is past the target date, update the target date to the next 15 days increment
      while (today > targetDate) {
        targetDate.setDate(targetDate.getDate() + 14);
       }

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = targetDate.toLocaleDateString(undefined, options);

      setDisplayDate(formattedDate);
    };

    updateDateDisplay();

    // Calculate the time until the next update (15 days)
    const now = new Date();
    const initialTargetDate = new Date('2024-07-07');
    let nextUpdateDate = new Date(initialTargetDate);

    // Increment the nextUpdateDate by 15 days until it's in the future
    while (now > nextUpdateDate) {
      nextUpdateDate.setDate(nextUpdateDate.getDate() + 14);
    }

    const timeToNextUpdate = nextUpdateDate - now;

    // Set a timeout for the first update
    const timeoutId = setTimeout(() => {
      updateDateDisplay();

      // Set an interval to update the date display every 15 days
      const intervalId = setInterval(updateDateDisplay, 14 * 24 * 60 * 60 * 1000);

      // Clear the timeout and return the interval cleanup function
      // clearTimeout(timeoutId);
      return () => clearInterval(intervalId);
    }, timeToNextUpdate);

    return () => clearTimeout(timeoutId);
  }, []);
  
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
          <h1 className="text-red-500 font-bold p-2  ">
         
            
            STARTS ON  {displayDate} (8:00 AM)
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
