import React, { useEffect, useRef } from "react";

const SuccessAchieved = () => {
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
    <section ref={sectionRef} className="container mx-auto px-4 py-8">
      <h2 className="smooth-scroll text-3xl font-bold text-center mb-8">Success Achieved</h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="radius-yellow flex flex-col rounded-xl overflow-hidden shadow-lg">
          <img
            className="smooth-scroll   w-full h-auto"
            src="\EmailSection_1.png"
            alt="Image 1"
          />
        </div>

        {/* Card 2 */}
        <div className="radius-yellow  flex flex-col rounded-xl overflow-hidden shadow-lg">
          <img
            className="smooth-scroll   w-full h-auto"
            src="\Emailsection2_1.png"
            alt="Image 2"
          />
        </div>

        {/* Card 3 */}
        <div className=" radius-yellow  flex flex-col rounded-xl overflow-hidden shadow-lg">
          <img
            className="smooth-scroll   w-full h-auto"
            src="\ProductLaunch.png"
            alt="Image 3"
          />
        </div>

        {/* Card 4 */}
        <div className="radius-yellow  flex flex-col rounded-xl overflow-hidden shadow-lg">
          <img
            className="smooth-scroll   w-full h-auto"
            src="\HighScaleTicket.png"
            alt="Image 4"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessAchieved;
