import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BuisnessChange = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scroll");
        } else {
          entry.target.classList.remove("animate-scroll");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const elements = section.querySelectorAll(".smooth-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="buisness-section w-full relative flex-col radius-yellow bg-custom-brown rounded-3xl mt-14 lg:mt-20 p-6"
    >
      <div className="container mx-auto max-w-custom-2xl">
        <div className="flex flex-col lg:flex-row lg:gap-14 justify-center lg:space-y-0 rounded-lg">
          <div className="flex flex-col items-center w-full space-y-4 mx-auto lg:mx-0">
            <h2 className="smooth-scroll text-3xl mt-10 font-bold text-center text-white mb-4">
              How Will Your Business Transform with Decision?
            </h2>
            <div className="smooth-scroll flex justify-center mb-4">
              <svg
                width="200"
                height="20"
                viewBox="0 0 100 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 Q 50 0, 95 15"
                  stroke="yellow"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </div>

            {/* main body */}
            <div className="image-text-section flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 space-y-4 lg:space-y-0">
              <div className="smooth-scroll w-full lg:w-1/2 flex justify-center items-center p-4">
                <img
                  src="/Great Approach PICTURE.jpg"
                  alt="Updated"
                  className="smooth-scroll rounded-3xl w-full h-auto lg:w-auto lg:h-auto xl:h-96"
                />
              </div>

              <div className="w-full lg:w-1/2 flex-col justify-center items-center p-4">
                <ul className="space-y-4 text-white text-lg sm:text-xl">
                  <li className="smooth-scroll flex items-center space-x-2">
                    <div className="smooth-scroll bg-green-600 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <span className="smooth-scroll p-1 sm:p-4 text-xl md:text-2xl">
                      Streamline operations for enhanced <b> efficiency</b> and{" "}
                      <b> productivity.</b>
                    </span>
                  </li>

                  <li className="smooth-scroll flex items-center space-x-2">
                    <div className="smooth-scroll bg-green-600 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <span className="smooth-scroll p-1 sm:p-4 text-xl md:text-2xl">
                      Elevate decision-making for <b> strategic growth</b> and{" "}
                      <b> profitability.</b>
                    </span>
                  </li>
                  <li className="smooth-scroll flex items-center space-x-2">
                    <div className="smooth-scroll bg-green-600 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <span className="smooth-scroll p-1 sm:p-4 text-xl md:text-2xl">
                      Cultivate a culture of <b>innovation</b> and{" "}
                      <b>adaptability</b> to thrive in <b>dynamic markets.</b>{" "}
                    </span>
                  </li>

                  <li className="smooth-scroll flex items-center space-x-2">
                    <div className="smooth-scroll bg-green-600 p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                        <path
                          d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <span className="smooth-scroll p-1 sm:p-4 text-xl md:text-2xl">
                      Propel your business towards <b>sustainable success</b>{" "}
                      and <b>competitive advantage.</b>{" "}
                    </span>
                  </li>
                </ul>

                {/* action now button */}

                <div className="smooth-scroll flex justify-center mt-8 sm:mt-8 sm:py-2 sm:px-2 ">
                  <a href="https://rzp.io/l/badecisionmc">
                    {" "}
                    <button className="smooth-scroll bg-blue-600 text-white sm:text-xl font-bold py-2 px-2  sm:px-6 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
                      <span className="flex-grow text-center">
                        Action Now for ₹299
                      </span>
                      <FontAwesomeIcon
                        icon={faGreaterThan}
                        className="bg-white text-blue-500 px-4 p-2 rounded-lg"
                      />
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuisnessChange;
