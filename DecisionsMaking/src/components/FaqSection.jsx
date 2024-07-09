import React,{useEffect,useRef,useState}from "react";

const FaqSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [q5, setq5] = useState(false);
  const [q6, setq6] = useState(false);

  const [q7, setq7] = useState(false);
  const [q8, setq8] = useState(false);

  const [q9, setq9] = useState(false);
  const [q10, setq10] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const toggleAnswer2 = () => {
    setq2(!q2);
  };

  const toggleAnswer3 = () => {
    setq3(!q3);
  };

  const toggleAnswer4 = () => {
    setq4(!q4);
  };

  const toggleAnswer5 = () => {
    setq5(!q5);
  };

  const toggleAnswer6 = () => {
    setq6(!q6);
  };

  const toggleAnswer7 = () => {
    setq7(!q7);
  };

  const toggleAnswer8 = () => {
    setq8(!q8);
  };

  const toggleAnswer9 = () => {
    setq9(!q9);
  };
  const toggleAnswer10 = () => {
    setq10(!q10);
  };


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
    className="faq-section">
      {/* <div> */}
        <h1 className="smooth-scroll text-center text-2xl font-bold mt-10">
          Frequently Asked Questions:
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
              stroke="yellow"            strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        {/* FAQ   questions */}
        <div className="smooth-scroll sm:text-xl mx-4 sm:mx-5 md:mx-[90px]">
          {/* Q1 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1
                  className={`mt-3 ${
                    isOpen ? "text-yellow-200" : "text-white"
                  }`}
                >
                  What is the Entrepreneurship Decision Revolution Seminar
                  about?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{isOpen ? "-" : "+"}</p>
              </div>
            </div>
            {isOpen && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    This seminar is designed to equip entrepreneurs with
                    powerful decision-making strategies tailored for business
                    success. Participants will learn how to make informed
                    choices, overcome common challenges, and drive significant
                    growth in their ventures.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />

          {/* Q2 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer2}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q2 ? "text-yellow-200" : "text-white"}`}>
                  Who should attend this seminar?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q2 ? "-" : "+"}</p>
              </div>
            </div>
            {q2 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q2 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Entrepreneurs, business owners, corporate professionals, and
                    aspiring entrepreneurs who are seeking to enhance their
                    decision-making skills and propel their businesses forward
                    are encouraged to attend.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />

          {/* Q3 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer3}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q3 ? "text-yellow-200" : "text-white"}`}>
                  What will I learn during the seminar?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q3 ? "-" : "+"}</p>
              </div>
            </div>
            {q3 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q3 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Throughout the seminar, you will gain insights into various
                    decision-making frameworks, techniques, and best practices
                    specifically curated for entrepreneurs. Topics may include
                    strategic planning, risk assessment, opportunity evaluation,
                    and more.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
          {/* Q4 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer4}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q4 ? "text-yellow-200" : "text-white"}`}>
                  How will this seminar benefit me and my business?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q4 ? "-" : "+"}</p>
              </div>
            </div>
            {q4 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q4 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    By attending this seminar, you will acquire the tools and
                    knowledge needed to make better decisions that lead to
                    increased profitability, sustainable growth, and competitive
                    advantage in your business endeavors.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
          {/* Q5 */}

          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer5}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q5 ? "text-yellow-200" : "text-white"}`}>
                  Is this seminar suitable for beginners or advanced
                  entrepreneurs?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q5 ? "-" : "+"}</p>
              </div>
            </div>
            {q5 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q5 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    This seminar caters to entrepreneurs at all stages of their
                    journey, from beginners looking to lay a strong foundation
                    to seasoned veterans seeking to refine their decision-making
                    processes for continued success.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
          {/* Q6 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer6}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q6 ? "text-yellow-200" : "text-white"}`}>
                  Will there be opportunities for networking and interaction?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q6 ? "-" : "+"}</p>
              </div>
            </div>
            {q6 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q6 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Yes, the seminar will include networking sessions, Q&A
                    opportunities, and interactive discussions where
                    participants can connect with peers, share experiences, and
                    gain valuable insights from fellow entrepreneurs
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />

          {/* Q7 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer7}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q7 ? "text-yellow-200" : "text-white"}`}>
                  What resources will be provided to participants?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q7 ? "-" : "+"}</p>
              </div>
            </div>
            {q7 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q7 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Participants will receive seminar materials, including
                    handouts, worksheets, and access to online resources, to
                    support their learning and implementation of decision-making
                    strategies discussed during the seminar.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
          {/* Q8 */}

          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer8}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q8 ? "text-yellow-200" : "text-white"}`}>
                  What is the duration of the seminar?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q8 ? "-" : "+"}</p>
              </div>
            </div>
            {q8 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q8 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    The seminar typically lasts 4 Hours, including
                    breaks and networking sessions, to ensure participants have
                    ample time to absorb the content and engage with fellow
                    attendees.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
          {/* Q9 */}

          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer9}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1 className={`mt-3 ${q9 ? "text-yellow-200" : "text-white"}`}>
                  Is there a money-back guarantee?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q9 ? "-" : "+"}</p>
              </div>
            </div>
            {q9 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q9 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Yes, we offer a satisfaction guarantee. If for any reason
                    you are not fully satisfied with the seminar, please contact
                    us, and we will be happy to discuss refund options with you.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />

          {/* Q10 */}
          <div className="smooth-scroll">
            <div
              onClick={toggleAnswer10}
              className="py-2 flex justify-between cursor-pointer"
            >
              <div>
                <h1
                  className={`mt-3 ${q10 ? "text-yellow-200" : "text-white"}`}
                >
                  How do I register for the Entrepreneurship Decision Revolution
                  Seminar?
                </h1>
              </div>
              <div>
                <p className="text-yellow-200 text-5xl">{q10 ? "-" : "+"}</p>
              </div>
            </div>
            {10 && (
              <div>
                <div
                  className={`overflow-hidden transition-max-height duration-900 ease-in-out ${
                    q10 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-xl">
                    Registration details, including dates, times, and
                    registration instructions, can be found [insert registration
                    link or contact information]. Simply follow the provided
                    instructions to secure your spot at the seminar.
                  </p>
                </div>
              </div>
            )}
          </div>
          <hr className="text-gray" />
        </div>
      </section>
  
  );
};

export default FaqSection;
