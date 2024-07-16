import React,{useEffect,useRef} from 'react'

const HeaderText = () => {


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
    className="flex items-center justify-center  bg-gray-100">
      <div className="text-center">
        <h2 className="smooth-scroll text-3xl md:text-4xl font-bold mb-4">
          Transform Your Business into a 
          <span className="px-2">
            <b className="smooth-scroll text-yellow-200 text-center">Crore-earning</b>
          </span> <br />
          Enterprise
        </h2>
        <p className="smooth-scroll text-gray-700 text-xl font-bold">
          Say Goodbye to Overwhelm and Confusion of Your Future
        </p>
      </div>
    </section>
  )
}

export default HeaderText
