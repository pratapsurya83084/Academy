import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const TestimonialParticipant = () => {
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
    <section ref={sectionRef} className="nine-testimonial-section">
      <div className="bg-custom-brown radius-yellow rounded-3xl pb-4 ">
        <h1 className="smooth-scroll text-2xl text-center font-bold p-6">
          {" "}
          Testimonials from Previous Participants
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
        {/* section-29 */}
        <div className=" smooth-scroll justify-center  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 ">
          {/* cards 1 max-w-sm */}
          <div className=" p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl mt-2"
              src="\Screenshot 2024-06-21 085545.png"
              alt=""
            />
            <p className="text-center">
              I am immensely grateful for the Bishop Adhikari course. The
              teachings have helped me navigate life's challenges with more
              grace and understanding. The instructors were knowledgeable and
              compassionate , making the entire experience enriching and
              impactful. This course has truly been a blessing.
            </p>

            <p className="mb-4 mx-2 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200"> Rohan Mehta , India </b>
                <h5 className="smooth-scroll"> Marketing Director at Reliance Industries</h5>
              </span>
            </p>
          </div>

          {/* cards 2  max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Olivia Watson England.jpeg"
              alt=""
            />
            <p className="text-center">
              The Bishop Adhikari course was truly transformative. It provided
              me with profound insights and practical tools that I have
              seamlessly integrated into my daily life. The clarity and depth of
              the teachings were exceptional. I highly recommend this course to
              anyone seeking personal and spiritual growth.
            </p>

            <p className="bg-custom-gray mb-4 px-4 mx-2  radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Olivia Watson , England</b>
                <h5 className="smooth-scroll"> Senior Manager at GreenTech Solutions</h5>
              </span>
            </p>
          </div>

          {/* cards 3 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Aisha Al Mansouri UAE .png"
              alt=""
            />
            <p className="text-center">
              Taking the Bishop Adhikari course was one of the best decisions I
              have made. The content was enlightening , and the interactive
              sessions allowed for deep personal reflection. The sense of
              community and support was unparalleled. I feel more grounded and
              connected to my purpose.
            </p>

            <p className="mb-4 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Aisha Al Mansouri , UAE </b>
                <h5 className="smooth-scroll"> Project Manager at Emirates Group</h5>
              </span>
            </p>
          </div>

          {/* cards 4  max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Anna Ivanova Russia .jpeg"
              alt=""
            />
            <p className="text-center">
            The Bishop Adhikari course exceeded
             my expectations. The blend of theory
              and practical application was perfect.
               I have seen significant positive changes
                in my mindset and approach to life since 
                completing the course. It's an experience 
            I would recommend to everyone.
            </p>

            <p className="mb-4 bg-custom-gray radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Anna Ivanova , Russia </b>
                <h5 className="smooth-scroll">HR Specialist at Gazprom</h5>
              </span>
            </p>
          </div>

          {/* cards 5 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Max Müller Germany.jpg"
              alt=""
            />
            <p className="text-center">
              I found the Bishop Adhikari course to be incredibly inspiring. The
              course material was well-structured and delivered with great
              expertise. It has opened my mind to new perspectives and has been
              a catalyst for personal growth. I am deeply appreciative of this
              journey.
            </p>

            <p className="bg-custom-gray mb-3 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200"> Max Muller , Germany</b>
                <h5 className="smooth-scroll"> Software Engineer at SAP</h5>
              </span>
            </p>
          </div>

          {/* cards 6 max-w-sm*/}
          <div className="p-2  radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Priya Patel India .jpeg"
              alt=""
            />
            <p className="text-center">
              The Bishop Adhikari course offered profound wisdom and practical
              guidance that has greatly impacted my life. The instructors
              created a supportive and engaging learning environment. I have
              gained invaluable tools for personal development and spiritual
              enlightenment.
            </p>

            <p className="bg-custom-gray mx-2 px-1 mb-4 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Priya Patel , India</b>
                <h5 className="smooth-scroll"> Financial Analyst at Tata Consultancy Services</h5>
              </span>
            </p>
          </div>

          {/* cards 7 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\James Smith England.jpeg"
              alt=""
            />
            <p className="text-center">
              The Bishop Adhikari course provided a unique and powerful learning
              experience. The insights and teachings have helped me to better
              understand myself and my purpose. The course was well-organized ,
              and the community aspect added a wonderful layer of support and
              connection.
            </p>

            <p className="bg-custom-gray mb-4 radius-yellow rounded-xl mt-5 p-3 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">James Smith , England</b>
                <h5 className="smooth-scroll"> Director at Global Trade Corp</h5>
              </span>
            </p>
          </div>

          {/* cards 8 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\Elena Volkova  Russia.png"
              alt=""
            />
            <p className="text-center">
              The Bishop Adhikari course has been a profound journey of
              self-discovery and empowerment. The comprehensive curriculum and
              supportive community helped me gain new perspectives on both
              personal and professional challenges. This experience has been
              invaluable , and I highly recommend it to anyone looking to make
              meaningful changes in their life.
            </p>

            <p className="bg-custom-gray mb-4 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Elena Volkova , Russia</b>
                <h5 className="smooth-scroll"> Chief Financial Officer at Rosneft</h5>
              </span>
            </p>
          </div>

          {/* cards 9 max-w-sm*/}
          <div className="p-2 radius-yellow rounded-3xl  flex flex-col justify-center items-center bg-gray">
            <img
              className=" smooth-scroll h-56 rounded-3xl"
              src="\9th_testimonial_img.jpg"
              alt=""
         smooth-scroll     />
            <p className="text-center">
              "The Bishop Adhikari course was truly transformative. It provided
              me with profound insights and practical tools that I have
              seamlessly integrated into my daily life. The clarity and depth of
              the teachings were exceptional. I highly recommend this course to
              anyone seeking personal and spiritual growth."
            </p>

            <p className="bg-custom-gray mb-4 radius-yellow rounded-xl mt-5 p-2 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className=" ">
                <b className="smooth-scroll text-yellow-200">Eric Wu , USA</b>
                <h5 className="smooth-scroll"> Chief Technology Officer at Tech Innovations</h5>
              </span>
            </p>
          </div>
        </div>
        {/* action now button */}

        <div className="flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
          <a href="https://rzp.io/l/badecisionmc">
            {" "}
            <button className="bg-blue-600 text-white sm:text-xl md:text-2xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
              <span className="flex-grow text-center">Action Now for ₹299</span>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="bg-white text-blue-500 px-4 p-2 rounded-lg"
              />
            </button>
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default TestimonialParticipant;
