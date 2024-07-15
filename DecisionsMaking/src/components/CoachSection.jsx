import React, { useEffect, useRef } from "react";

const CoachSection = () => {
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
    <section ref={sectionRef} className="coach-section">
      <div className="flex flex-col items-center bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Get Acquainted with Your Coach
        </h1>
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

        <div className="flex flex-col justify-between items-center mt-36 radius-yellow bg-custom-brown md:flex-row h-52 lg:w-[600px] w-full rounded-3xl p-4 md:p-8">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start relative  bottom-24 lg:right-32 ">
            <img
              src="\Get Acquainted with Your Coach.png"
              className="smooth-scroll radius-yellow rounded-3xl lg:h-[200px] h-[180px]"
              alt=""
            />
            <div className="lg:ml-28 mt-1">
              <p className="smooth-scroll mt-4   md:mt-2 text-center md:text-left font-bold text-xl ">
                Bishop Adhikari <br />
                <span className="smooth-scroll md:hidden"> Decision Business Coach</span>
              </p>
              <p className="smooth-scroll hidden md:flex mt-2 md:mt-2 text-center md:text-left font-bold text-xl ">
                Decision Business Coach
              </p>
            </div>
          </div>
          <div className=" hidden  md:flex md:mt-0 md:ml- flex-grow  items-center justify-center md:justify-start">
           
            <img
              className="smooth-scroll h-40 md:ml-40 lg:ml-2 bg-yellow-300 rounded-3xl p-2"
              src="\buisness_coach_icon.png"
              alt=""
            />
          </div>
        </div>

        {/* cards */}
         {/* cards  2xl:ml-[75px]  ,justify-around  flex-wrap  grid grid-cols justify-center items-center sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  mt-8 gap-5  md:gap-x-   lg:gap-x-29 xl-gap-x-10*/}
      <div className="smooth-scroll flex flex-wrap justify-center  mt-8">
        {/* cards1 */}
        <div className="radius-yellow flex flex-row m-2 items-center w-[300px] h-[170px]  bg-custom-brown text-white rounded-2xl p-4   min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">5+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              Company Owner with a valuation of $2 Billion With profitable
            </p>
          </div>
          <div>
            <h1 className="pl-32 mb-32 p-2">
              <img
                className="smooth-scroll bg-yellow-200 mt-2 rounded-xl p-2"
                src="\coachSection_img1.png"
                alt=""
              />
            </h1>
          </div>
        </div>

        {/* cards2 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">2L+</h3>
            <p className="smooth-scroll text-sm text-gray-300 ">Student base</p>
          </div>
          <div>
            <h1 className="pl-40 mb-20 ml-4 mt-2 p- h-20">
              <img
                className="smooth-scroll bg-yellow-200  rounded-xl p-2"
                src="\coachSection_img2.png"
                alt=""
              />
            </h1>
          </div>
        </div>

        {/* cards3 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">15M+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              Entrepreneur Enthuasist has reached in last 2 years
            </p>
          </div>
          <div className="pl-32 mb-20 ml-4 mt-2 p- h-20">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl mt-2"
              src="\coachSection_img3.png"
              alt=""
            />
          </div>
        </div>

        {/* cards4 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">1000+</h3>
            <p className="smooth-scroll text-sm text-gray-300">Workshop and Saminer</p>
          </div>
          <div className="  pl-36  mt-2 mb-32   p- h-">
            <img
              className="smooth-scroll bg-yellow-200  rounded-xl"
              src="\coachSection_img4.png"
              alt=""
            />
          </div>
        </div>

        {/* cards5 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">10k+</h3>
            <p className="smooth-scroll text-sm text-gray-300">Follwers in Social Media</p>
          </div>
          <div className="pl-36  mt-6 mb-32  ">
            <img
              className="smooth-scroll bg-yellow-200  h-10 w-14 rounded-xl p-1"
              src="\coachSection_img5.png"
              alt=""
            />
          </div>
        </div>

        {/* cards6 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className=" smooth-scroll text-3xl font-bold">350k+</h3>
            <p className="smooth-scroll text-sm text-gray-300">Paid Customer</p>
          </div>
          <div className="pl-36  mt-6 mb-32  ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img6.png"
              alt=""
            />
          </div>
        </div>

        {/* cards7 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">200+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              Hours of Business consulting coaching
            </p>
          </div>
          <div className="pl-40  mt-6 mb-32  ">
            <img
              className="bg-yellow-200  rounded-xl p-1"
              src="\coachSection_img7.png"
              alt=""
            />
          </div>
        </div>
        {/* cards8 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">155+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              {" "}
              Industries has explored and worked
            </p>
          </div>
          <div className="pl-40 p- mt-6 mb-32  ">
            <img
              className="smooth-scroll bg-yellow-200 rounded p-"
              src="\coachSection_img8.png"
              alt=""
            />
          </div>
        </div>
        {/* cards9 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">10k+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              Coaching and Trainer Customer
            </p>
          </div>
          <div className="pl-40 p- mt-6 mb-32  ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img9.png"
              alt=""
            />
          </div>
        </div>
        {/* cards10 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">20k+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              {" "}
              seminars have been taken in 10 countries
            </p>
          </div>
          <div className="pl-36 p-2 mt-6 mb-32 ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img10.png"
              alt=""
            />
          </div>
        </div>
        {/* cards11 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">15M+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              {" "}
              Citation on my research work
            </p>
          </div>
          <div className="pl-36 p- mt-6 mb-32 ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img11.png"
              alt=""
            />
          </div>
        </div>

        {/* cards12 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">7+</h3>
            <p className="smooth-scroll text-sm text-gray-300">NGO</p>
          </div>
          <div className="pl-36  p-2 ml-10 mt-6 mb-32 ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img12.png"
              alt=""
            />
          </div>
        </div>

        {/* cards13 */}
        <div className=" radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">5+</h3>
            <p className="smooth-scroll text-sm text-gray-300">Degree Holding</p>
          </div>
          <div className="pl-32  p-2 ml-10 mt-6 mb-32 ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img13.png"
              alt=""
            />
          </div>
        </div>

        {/* cards14 */}
        <div className="radius-yellow flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
          <div>
            <h3 className="smooth-scroll text-3xl font-bold">15+</h3>
            <p className="smooth-scroll text-sm text-gray-300">
              {" "}
              best awards in the business category
            </p>
          </div>
          <div className="pl-32  p-2 ml-10 mt-6 mb-32 ">
            <img
              className="smooth-scroll bg-yellow-200 rounded-xl p-1"
              src="\coachSection_img14.png"
              alt=""
            />
          </div>
        </div>
      </div>


      </div>
    </section>
  );
};

export default CoachSection;
