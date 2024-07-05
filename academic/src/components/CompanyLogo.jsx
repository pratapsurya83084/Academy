import React,{useEffect,useRef} from 'react'

const CompanyLogo = () => {
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
    className='Companylogo-section mt-10 mb-52 sm:mb-32'>
      <div className='smooth-scroll radius-yellow flex justify-center bg-custom-brown  '>
        <img className='smooth-scroll h-20  md:h-20' src="\BISJHINTUS WHITE LOGO.png" alt="" />
      </div>
    </section>
  )
}

export default CompanyLogo
