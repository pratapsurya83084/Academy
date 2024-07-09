import React,{useEffect,useRef} from "react";

const Heading = () => {
  
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
    <sectionn 
    ref={sectionRef}
    className="relative flex items-center justify-center ">
      {/* Blue Image */}
      {/* left-0 top-[120px] transform -translate-y-1/2 mt-4  */}
      <div className="smooth-scroll   absolute left-0 top-[145px] sm:top-[150px] animate-move-x-reverse">
       
        <svg xmlns="http://www.w3.org/2000/svg" className="pl-8 relative bottom-0 top- sm:bottom-4" width="70" height="50" viewBox="0 0 26 28" fill="none"><path d="M0.962914 27.9871L0.962915 0.0613831L25.1473 14.0243L0.962914 27.9871Z" fill="#0067DE"></path></svg>
      </div>
      <div className="smooth-scroll sm:text-xl  radius-yellow font-bold bg-custom-brown md:text-2xl text-center text-white p-3 m-10 rounded-3xl">
        Student & Entrepreneurship Decision Revolution Seminar <br />
       <b className="smooth-scroll text-yellow-200"> 4-Hour</b> On Online Mode
      </div>
      {/* Yellow Image */}
      {/* top-2 transform -translate-y-1/2  */}
      <div className=" smooth-scroll absolute top-0  sm:left- md:right-14    right-4 mt-4   animate-move-x">
      
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 27 28" fill="none"><path d="M0.034542 7.60999L26.9435 0.14317L19.9555 27.1804L0.034542 7.60999Z" fill="#FFC621"></path></svg>
      </div>
      
      
    </sectionn>
  );
};

export default Heading;
