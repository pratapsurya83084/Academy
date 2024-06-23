import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const ThreeTestimonial = () => {
  return (
    <section className="three-testimonial-section">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-center mt-10 text-2xl font-bold">
              {" "}
              Struggling to Make a Decision?
            </h1>
          </div>

          <div className="flex justify-center mb-4">
            <svg
              width="300"
              height="30"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 Q 50 0, 95 15"
                stroke="yellow"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* add 3 cards */}
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col   md:flex-row justify-center mx-2 md:mx-0 -m-4 gap-6">
              {/* card-1 */}
              <div class="p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 class="tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    71 % of YOY growth
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (Just at 5 Months)
                  </h1>
                  <img class="h-56" src="public\mony_img1.png" alt="" />
                  <h5 class="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Startup
                  </h5>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p class="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span class="p-4 text-yellow-200 text-2xl font-bold">
                        Trishita
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* card-2 */}
              <div class="p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 class="tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    60 Corer
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (in the 3 years)
                  </h1>
                  <img
                    class="h-52 rounded-3xl"
                    src="public\Growth_Increase.jpg"
                    alt=""
                  />
                  <h5 class="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Devine Corporation.
                  </h5>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p class="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span class="p-4 text-yellow-200 text-2xl font-bold">
                        Jenica Yoo{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* card-3 */}
              <div class="p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 class="tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    3 Coroe in
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (just 6 Months){" "}
                  </h1>
                  <img class="h-56" src="\public\self_growth_img.png" alt="" />
                  <h5 class="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Freelancer Design and Content Strategies
                  </h5>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p class="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span class="p-2 text-yellow-200 text-2xl font-bold">
                        Deepak N R{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* action now button */}
        <div className="m-2 flex justify-center mt-4 sm:mt-4 mb-20 py-2 sm:px-2">
          <button className="bg-blue-600 text-white sm:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeTestimonial;
