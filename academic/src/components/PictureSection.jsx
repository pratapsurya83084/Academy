import React, { useEffect, useRef } from "react";

const PictureSection = () => {
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
    <section ref={sectionRef} className="picture-section">
      <div className="radius-yellow bg-custom-brown mt-5 rounded-3xl relative">
        {/* section-31 */}
        <h1 className="smooth-scroll text-center text-2xl p-4 mt-5 lg:text-3xl font-bold">
          I'm Committed to Helping One Million Business Owners Make Better
          Decisions for Profit and Growth
        </h1>
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
        {/* image section below */}
        <div className="images-coach w-full">
        {/* lg:mx-1 */}
          <div className="w-full gap-y- sm:gap-x-2  md:gap-x-3 lg:gap-x-2 flex-col justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4   xl:gap-[10px]  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
            {/* first image */}
            <div>
              <img
                className="  smooth-scroll  radius-yellow   h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[500px] xl:h-[230px] rounded-3xl"
                src="\ABOUTUS4.jpg"
                alt=""
              />
            </div>
            {/* second image */}
            <div>
              <img
                className="  smooth-scroll  radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[500px] xl:h-[230px] rounded-3xl"
                src="\ABOUTUS3.jpg"
                alt=""
              />
            </div>
            {/* third image */}
            <div>
              <img
                className="  smooth-scroll  radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[500px] xl:h-[230px] rounded-3xl"
                src="\WhatsApp Image 2024-05-14 at 2.44.45 PM (1).jpeg"
                alt=""
              />
            </div>
            {/* 4 th image */}
            <div>
              <img
                className="  smooth-scroll  radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[500px] xl:h-[230px] rounded-3xl"
                src="\WhatsApp Image 2024-06-19 at 10.55.51 AM.jpeg"
                alt=""
              />
            </div>
            {/* 5th image */}
            <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4">
              {/* h-[200px] sm:h-[300px] md:h-[400px] lg:h-[540px] xl:h-[980px]   */}
              <img
                className="  smooth-scroll  radius-yellow h-[110px] sm:h-[280px] xl:h-[350px] 2xl:h-[570px] w-full object-cover rounded-3xl"
                src="\Screenshot 2024-06-20 225634.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <h1 className="smooth-scroll text-center  font-bold text-xl lg:text-3xl p-8">
          Because I've Faced Numerous Challenges Myself But I Build it ...
        </h1>
        
      </div>

     
    </section>
  );
};

export default PictureSection;
