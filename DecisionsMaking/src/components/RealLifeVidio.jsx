import React,{useEffect,useRef} from "react";

const RealLifeVidio = () => {
  
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
    className="px-4 py-10 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="smooth-scroll text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Discover real-life business enthusiasts who transform straight from
        those  who have transformed straight after attending my coaching
          {/* Discover real-life business enthusiasts who transform straight from
          those who attended my coaching */}

        </h1>
        <div className="smooth-scroll flex justify-center mb-4">
          <svg
            width="400"
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
      
      {/* Video Section */}
      <div className="smooth-scroll flex flex-col md:flex-row md:justify-between gap-6">
        <div className="smooth-scroll w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className=" absolute radius-yellow  top-0 left-0 w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/-qfJYcEn3Yg"
              title="Embedded Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="smooth-scroll w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className=" absolute radius-yellow  top-0 left-0 w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/uTA1M5Kdfeo"
              title="Embedded Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealLifeVidio;
