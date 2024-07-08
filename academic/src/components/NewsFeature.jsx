import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newsfeature = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null, // No previous arrow
    nextArrow: null, // No next arrow
  };

  return (
    <section ref={sectionRef} className="">
      <h1 className="smooth-scroll carousel-section bg-yellow-200 ml-6 sm:ml-8 md:ml-10 mt-10 rounded-tl-xl rounded-tr-xl text-black font-bold inline-block p-1 px-4">
        FEATURED IN
      </h1>
      <div className="image-carousel-section flex justify-center items-center w-full radius-yellow p-4 h-32 sm:h-32 md:h-36 lg:h-36 xl:h-36 2xl:h-40 rounded-3xl bg-custom-brown">
        <Slider {...settings} className="flex p-2 w-full">
          {/* First slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-4">
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-20 md:h-28 max-w-full"
                  src="/BBC_News-Logo.wine.png"
                  alt="Slide 1"
                />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-14 md:h-20 max-w-full"
                  src="/sky_news_img.jpg"
                  alt="Slide 2"
                />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-14 md:h-20 max-w-full"
                  src="/timesof_india.jpg"
                  alt="Slide 3"
                />
              </div>
            </div>
          </div>

          {/* Second slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-4">
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-12 md:h-18 max-w-full"
                  src="/the_hindu_newsimg.webp"
                  alt="Slide 4"
                />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-14 md:h-20 max-w-full"
                  src="/gulf_news_img.png"
                  alt="Slide 5"
                />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-12 md:h-18 max-w-full"
                  src="/britan_new_img.jpg"
                  alt="Slide 6"
               />
              </div>
            </div>
          </div>

          {/* Third slide */}
          <div className="p-2">
            <div className="flex justify-center items-center gap-4">
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-12 md:h-18 max-w-full"
                  src="/euronews-logo-768x230.jpg"
                  alt="Slide 7"
                />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-14 md:h-20 max-w-full"
                  src="/news18_img.jpg"
                  alt="Slide 8"
        />
              </div>
              <div className="w-1/3 flex justify-center">
                <img
                  className="smooth-scroll  h-12 md:h-18 max-w-full"
                  src="\the_uae_news_channel_today.avif"
                  
                  alt="Slide 9"
               />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Newsfeature;
