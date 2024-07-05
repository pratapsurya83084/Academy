import React ,{useEffect,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const ThreeTestimonial = () => {

 
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll');
        } else {
          entry.target.classList.remove('animate-scroll');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = section.querySelectorAll('.smooth-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
    ref={sectionRef}
    className="three-testimonial-section">
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="smooth-scroll text-center mt-10 text-2xl font-bold">
              {" "}
              Struggling to Make a Decision?
            </h1>
          </div>

          <div className="smooth-scroll flex justify-center mb-4">
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
        <div className="smooth-scroll text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col   md:flex-row justify-center mx-1 sm:mx-10 md:mx-0 -m-4 gap-6">
              {/* card-1 */}
              <div className="smooth-scroll  p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 className=" tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    71 % of YOY growth
                  </h2>
                  <h1 className=" title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (Just at 5 Months)
                  </h1>
                  <img className="h-56" src="\mony_img1.png" alt="" />
                  <h5 className=" p-2 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Startup
                  </h5>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p className="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span className=" p-4 text-yellow-200 text-2xl font-bold">
                        Trishita
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* card-2 */}
              <div className="smooth-scroll p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 className=" tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    60 Corer
                  </h2>
                  <h1 className=" title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (in the 3 years)
                  </h1>
                  <img
                    className=" h-52 rounded-3xl"
                    src="\Growth_Increase.jpg"
                    alt=""
                  />
                  <h5 className=" p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Devine Corporation.
                  </h5>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p className="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span className=" p-4 text-yellow-200 text-2xl font-bold">
                        Jenica Yoo{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* card-3 */}
              <div className="smooth-scroll p-2 md:w-1/3 bg-custom-brown radius-yellow rounded-3xl">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative flex flex-col items-center">
                  <h2 className=" tracking-widest title-font font-medium text-gray-400 mb-1 text-yellow-200 text-2xl">
                    3 Coroe in
                  </h2>
                  <h1 className=" title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    (just 6 Months){" "}
                  </h1>
                  <img className="h-56" src="\self_growth_img.png" alt="" />
                  <h5 className=" p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    Freelancer Design and Content Strategies
                  </h5>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <p className="radius-yellow bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
                      <span className=" p-2 text-yellow-200 text-2xl font-bold">
                        Deepak N R{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* action now button */}
       
        <div className=" m-2 flex justify-center mt-4 sm:mt-4 mb-20 py-2 sm:px-2">
        <a href="https://rzp.io/l/badecisionmc">  <button className="bg-blue-600 text-white sm:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>  </a>
        </div>
      
      </div>
    </section>
  );
};

export default ThreeTestimonial;
