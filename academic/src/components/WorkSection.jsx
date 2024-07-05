import React ,{useEffect,useRef} from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const WorkSection = () => {
  
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
    className="container xl:flex gap-10 px-5 py-10 mx-auto ">
      {/* Left Section - Image and Text */}
      {/* lg:w-4/5 */}
      <div className=" mx-auto  items-center justify-center lg:justify-between">
        {/* mb-10 */}
        <div className=" w-full  lg:ml-[250px] lg:w-auto xl:ml-10  lg:mb-0">
          {/* overflow-hidden */}
          <div className="smooth-scroll workshop-left-section lg:h-[400px] lg:w-[500px]  relative">
            <h1 className="text-black animate-move-x-reverse mt-1  sm:ml-5 text-4xl sm:text-5xl absolute right-40 left-10 sm:right-96 md:right-96 xl:right-[290px] md:text-6xl md:ml-2 lg:right-60 lg:text-6xl lg:ml-2 font-bold">
              Bishop
            </h1>
            <img
              // md:ml-[200px] h-[500px],object-cover
              className=" h-[300px]  sm:h-[500px] lg:w-[500px]    p-2 w-full  rounded-3xl"
              src="/MY PICTURE AT FIRST.png" // Make sure your image path is correct
              alt="WorkshopImage"
            />
            <h1 className="animate-move-x-reverse font-bold absolute mt-32 left-58  bottom-20 sm:bottom-52 md:bottom-40 xl:bottom-20 md:mt-60 md:left-[390px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
              Adhikari
            </h1>
          </div>
        </div>

        {/* box */}
        <div className="w-full lg:mt-24 ">
          <div className="left-text-section radius-yellow bg-custom-brown text-xl p-2 rounded-3xl">
            <div className="smooth-scroll w-full text-center p-3">
              <span className="smooth-scroll font-bold">
                India’s “Decision Entrepreneurship Coach”
              </span>{" "}
              Trained over
              <span className="smooth-scroll font-bold"> 1,90,000</span> Students & Business
              Enthusiasts for <span className="smooth-scroll font-bold">5 Years.</span>
            </div>

            {/* Ratings */}
            <div className="smooth-scroll radius-yellow bg-custom-gray m-4 p-4 rounded-3xl text-center">
              <div className="smooth-scroll flex justify-center">
                <ReactStars size={25} half={true} value={5} edit={false} />
              </div>
              <br />
              <p className="smooth-scroll">
                More than <span className="font-bold">10,3,000</span> Students &
                Business Enthusiasts Rated My coaching style.
              </p>
            </div>
          </div>
          {/* Action Button */}
         <a href="https://rzp.io/l/badecisionmc">
          <div className="smooth-scroll lg:hidden block">
            <button className="flex mt-10 bg-blue-600 w-full justify-center p-5 font-bold text-sm md:text-2xl rounded-2xl relative focus:border">
              Action Now with ₹299
              <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </button>
          </div>
          </a>
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="right-section mt-10 flex flex-col items-center space-y-5">
        <h1 className="smooth-scroll text-3xl font-bold text-center">
          Why attend this workshop?
        </h1>
        <div className="smooth-scroll flex justify-center mb-4">
          <svg
            width="300"
            height="20"
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

        {/* Benefits List */}
        <div className="radius-yellow bg-custom-brown text-xl rounded-3xl p-2">
          <div className="smooth-scroll flex items-center space-x-2 mt-2">
            <div className="smooth-scroll h-6 w-6 flex justify-center bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-4">
              Learn proven strategies to{" "}
              <span className="font-bold">
                tackle common entrepreneurial obstacles
              </span>{" "}
              and drive your business forward.
            </h1>
          </div>

          <div className="smooth-scroll flex items-center space-x-2 mt-2">
            <div className="smooth-scroll h-6 w-6 flex justify-center bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-4">
              Gain insights into{" "}
              <span className="smooth-scroll font-bold">
                scaling your business sustainably
              </span>{" "}
              without compromising quality or efficiency.
            </h1>
          </div>

          <div className=" smooth-scroll flex items-center space-x-2 mt-2">
            <div className=" smooth-scroll h-6 w-6 flex justify-center bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className=" smooth-scroll p-4">
              Gain valuable knowledge to{" "}
              <span className=" smooth-scroll font-bold">make data-driven & impactful</span>{" "}
              decisions for profit margins.
            </h1>
          </div>

          <div className="smooth-scroll flex items-center space-x-2 mt-2">
            <div className="smooth-scroll h-6 w-6 flex justify-center bg-green-500 rounded-full">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <h1 className="smooth-scroll p-4">
              <span className="smooth-scroll font-bold">
                Boost Strategy, Boost Financial, Boost Flexibility Unlock
                guaranteed outcomes
              </span>{" "}
              with the seminar's actionable steps.
            </h1>
          </div>
        </div>

        {/* Action Button for Mobile */}
        <a href="https://rzp.io/l/badecisionmc" className="hidden lg:flex w-full">
        {/* <div className=""> */}
          <button className="smooth-scroll flex mt-10 bg-blue-600 w-full justify-center p-5 font-bold text-xl md:text-2xl rounded-2xl relative focus:border">
            Action Now with ₹299
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        {/* </div> */}
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
