import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const initialTotalSeconds = 90;

const OfferPrice = () => {
  const [totalSeconds, setTotalSeconds] = useState(() => {
    const savedTime = localStorage.getItem('countdownTotalSeconds');
    return savedTime ? parseInt(savedTime, 10) : initialTotalSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds > 0) {
          localStorage.setItem('countdownTotalSeconds', prevTotalSeconds - 1);
          return prevTotalSeconds - 1;
        } else {
          localStorage.setItem('countdownTotalSeconds', initialTotalSeconds);
          return initialTotalSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = totalSeconds % 90;

  return (
    <section className=" py-8">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center">
          <h3 className="text-xl lg:text-2xl font-bold mt-4 lg:mt-20 p-3">Total Value ₹9,468/-</h3>
        </div>

        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold p-2">Regular Price: ₹2,499/-</h2>
        </div>

        <div className="text-center">
          <h1 className="text-yellow-200 radius-yellow text-xl sm:text-2xl lg:text-3xl font-bold m-4 p-2 rounded-xl mt-4 lg:mt-6">TODAY'S OFFER PRICE: ₹299/-</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-5">
          {/* <div className="bg-gray-200 p-5 rounded-xl font-bold text-center">
            <span className="text-2xl">{String(minutes).padStart(2, '0')}</span> <br />
            MINUTES
          </div> */}

          <div className="bg-custom-gray radius-yellow p-5 rounded-xl font-bold text-center">
            <span className="text-2xl">{String(seconds).padStart(2, '0')}</span> <br />
            SECONDS
          </div>
        </div>
        <a href="https://rzp.io/l/badecisionmc">
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white text-lg sm:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center space-x-2">
            <span>Action Now for ₹299</span>
            <FontAwesomeIcon icon={faGreaterThan} className="text-blue-500 bg-white p-2 px-3 rounded" />
          </button>
        </div>
        </a>
      </div>
    </section>
  );
};

export default OfferPrice;
