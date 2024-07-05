import React,{useEffect,useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const LearnFourHoursDecision = () => {

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
    <div>
       <section
         ref={sectionRef}
       className="fourHours-learnSection-section">
      <div className="flex flex-col justify-center items-center mx-10 mt-10">
        <h1 className="smooth-scroll text-center text-2xl font-bold">
          In just 4 hours, here's what you'll gain as a decision-maker
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
              stroke="yellow"             strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* card 1 */}
          <div className="radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll md:text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              01
            </div>
            <div className="smooth-scroll font-normal px-4 py-7 mt-4">
              <b>Discover 9 Proven Techniques</b> to Become an Elite Decision Maker
            </div>
          </div>

          {/* card 2 */} 
          <div className="smooth-scroll smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll smooth-scroll text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              02
            </div>
            <div className="smooth-scroll font-normal px-4 py-7">
            <b>Dive Into 5 Captivating Live Case Studies</b> to Shape Your Decision-Making Mastermind
            </div>
          </div>

          {/* card 3 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              03
            </div>
            <div className="font-normal px-4 py-7">
           <b> Be Among the First 10 Enrollees and</b> Get a 10-minute Personalized Decision-Making Assessment
            </div>
          </div>

          {/* card 4 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              04
            </div>
            <div className="smooth-scroll font-normal px-4 py-7">
           <b>Explore a Curated Library of 25 Resources </b> Packed With Decision-Making Insights
            </div>
          </div>

          {/* card 5 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              05
            </div>
            <div className="smooth-scroll font-normal px-4 py-7 mt-4">
            <b>Experience Real Growth With 6 Dynamic</b> Business Simulation Exercises
            </div>
          </div>

          {/* card 6 */}
          <div className="smooth-scroll radius-yellow max-w-sm flex flex-row bg-custom-gray  rounded-3xl">
            <div className="smooth-scroll text-2xl font-bold tracking-tight text-black py-4 px-4 mt-8 bg-yellow-200 mb-7 rounded-tr-2xl rounded-br-2xl">
              06
            </div>
            <div className="smooth-scroll font-normal px-4 py-7">
            <b>15 best Serve Cutting-Edge Software and Tools</b> Tailored for Entrepreneurial Success
            </div>
          </div>
        </div>

             {/* action now button */}
             <a href="https://rzp.io/l/badecisionmc">
             <div className="smooth-scroll flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
          <button className="bg-blue-600 text-white sm:text-xl md:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </div>
        </a>
      </div>
    </section>
    </div>
  )
}

export default LearnFourHoursDecision
