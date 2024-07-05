import React , { useState, useRef, useEffect } from 'react'
import OfferPrice  from './OfferPrice'

const BonusSection = () => {
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
    className="bonus-section">
    <div className="radius-yellow flex flex-col justify-center items-center  mt-10 bg-custom-brown rounded-3xl">
      <h1 className="smooth-scroll mt-10 text-center text-2xl font-bold">
        Unlock Exclusive Bonuses When You Register Before the Timer Expires!
      </h1>
      {/* yellow 2olor arrow curved */}
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
            stroke="yellow"             strokeWidth="5"
            fill="none"
          />
        </svg>
      </div>

      <div className="mb-10 mx-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* card 1 */}

        <div className="smooth-scroll  max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #1</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹632/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            An 8-Step-by-Step Guide to Making Confident Business Decisions
          </h5>
        </div>

        {/* card 2 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #2</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹549/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          10 Essential Strategies for Building and Scaling Your Business

          </h5>
        </div>

        {/* card 3 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #3</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹954/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          6 Unlocking the Secrets of Financial Success for Entrepreneurs  
          </h5>
        </div>

        {/* card 4 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #4</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹1021/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          15 Techniques to Maximize Efficiency and Achieve More in Less Time
          </h5>
        </div>

        {/* card 5 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #5</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹954/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          18 Strategies to Skyrocket Your Business Growth and Attract Your Ideal Customers

          </h5>
        </div>

        {/* card 6 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #6</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹632/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          2 Best E-book for Becoming a Visionary Leader in Your Industry
          </h5>
        </div>

       {/* card 7 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #7</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at:₹ 549/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          How to Build Wealth and Create Financial Stability for Life
          </h5>
        </div>

        {/* card 8 */}
        <div className="smooth-scroll smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #8</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹1021/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          15 Networking Ninja Mastering the Art of Building Professional Relationships for Business Success
          </h5>
        </div>

        {/* card 9 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #9</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹ 632/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          7 Strategies For Delighting Your Customers and Building Loyalty
          </h5>
        </div>


           {/* card 10 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #10</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at:₹ 954/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          6 Strategies Leveraging Social Platforms to Boost Your Brand and Drive Sales
          </h5>
        </div>

        {/* card 11 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #11</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹1021/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          9 Business Growth Hacks Insider Tips and Tricks for Accelerating Your Company's Expansion
          </h5>
        </div>

        {/* card 12 */}
        <div className="smooth-scroll max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
          <h1 className="smooth-scroll text-center  mb-2">SOLUTION COURSE #12</h1>
          <h2 className="smooth-scroll text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹549/-</h2>
          <h5 className="smooth-scroll text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          10 Mindfulness Techniques for Entrepreneurs: Cultivating Clarity, Focus, and Balance in Your Business and Life
          </h5>
        </div>



    
    </div>
    <OfferPrice/>


   {/* Blue polygon image */}
   {/* <img
          className=" animate-move-x-reverse md:h-14 relative top-4 bottom-0 left-0 xl:ml-20"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
          alt=""
        /> */}
    </div>
   
  </section>
  )
}

export default BonusSection
