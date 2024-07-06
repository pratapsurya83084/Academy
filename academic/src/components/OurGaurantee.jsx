import React,{useEffect,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


const OurGaurantee = () => {
  
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
    className="guarantee-section">
      {/* <div> */}
        <div className="text-center mt-10 p-4 text-2xl font-bold">
          <h1 className="smooth-scroll">Still Unsure? We've Got You Covered!</h1>
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
        </div>

        <div className="radius-yellow bg-custom-brown flex flex-col justify-center items-center mx-2 sm:mx-10 md:mx-10 lg:mx-20 rounded-3xl">
          <h2 className="smooth-scroll text-center font-bold md:hidden p-6 text-2xl">
            Our Guarantee
          </h2>

        



<div className="md:flex flex-row justify-center items-center gap-20">
  <div className="px-3">
    <h1 className="smooth-scroll py-2 p-2 hidden md:flex font-bold text-2xl">
      Our Guarantee
    </h1>
    <p className="smooth-scroll md:text-xl p-2  lg:text-2xl">
      Take advantage of this incredible offer now for only Rs 299, with a money-back 
      guarantee included. Enroll today, attend our seminar, and if you're not satisfied 
      for any reason, just send us an email, and we'll refund your entire payment—no 
      questions asked!
    </p>
  </div>

  <div className="py-10 flex justify-center">
    <img className="smooth-scroll rounded-full  w-64 md:w-[700px] h-auto" 
         src="\golden_image.jpg" 
         alt="Clear Image"/>
  </div>
</div>
        </div>
        {/* action now button */}
        
        <div className="smooth-scroll flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
        <a href="https://rzp.io/l/badecisionmc"> <button className="bg-blue-600 text-white sm:text-xl md:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>    </a>
        </div>
    
      {/* </div> */}
    </section>
  );
};

export default OurGaurantee;
