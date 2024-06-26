import React from 'react'

const PictureSection = () => {
  return (
    <section className="picture-section">
    <div className="radius-yellow bg-custom-brown mt-5 rounded-3xl relative">
      {/* section-31 */}
      <h1 className="text-center text-2xl p-4 mt-5 lg:text-3xl font-bold">
        I'm Committed to Helping One Million Business Owners Make Better
        Decisions for Profit and Growth
      </h1>
      <div className="flex justify-center mb-4">
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
      {/* image section below */}
      <div className="images-coach w-full">
        <div className="w-full gap-y- sm:gap-x-2  md:gap-x-3 lg:gap-x-2 flex-col justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:mx-1  xl:gap-[20px]  px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        {/* first image */}
          <div>
            <img 
              className="radius-yellow   h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
              src="\ABOUTUS4.jpg"
              alt=""
            />
          </div>
{/* second image */}
          <div>
            <img
              className="radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
              src="\ABOUTUS3.jpg"
              alt=""
            />
          </div>
          {/* third image */}
          <div>
            <img
              className="radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
              src="\WhatsApp Image 2024-05-14 at 2.44.45 PM (1).jpeg"
              alt=""
            />
          </div>
{/* 4 th image */}
          <div>
            <img
              className="radius-yellow h-[200px] w-full  sm:h-[200px]   md:h-[200px]  md:w-[470px] m-1   xl:w-[550px] xl:h-[300px] rounded-3xl"
              src="\WhatsApp Image 2024-06-19 at 10.55.51 AM.jpeg"
              alt=""
            />
          </div>
          {/* 5th image */}
          
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4">
          {/* h-[200px] sm:h-[300px] md:h-[400px] lg:h-[540px] xl:h-[980px]   */}
            <img
              className="radius-yellow h-[110px] sm:h-[280px] xl:h-[350px] 2xl:h-[570px] w-full object-cover rounded-3xl"
              src="\Screenshot 2024-06-20 225634.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 className="text-center  font-bold text-xl lg:text-3xl p-8">
        Because I've Faced Numerous Challenges Myself But I Build it ...
      </h1>
      {/* <img
        className="md:absolute top-[650px] xl:top-[600px] 2xl:top-[400px] animate-move-x-reverse ml-10 md:h-14 bottom-0 xl:ml-20"
        src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
        alt=""
      /> */}
    </div>

    {/* <div className="flex justify-center mt-8">
      <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Join Now for ₹99
      </button>
    </div> */}
  </section>
  )
}

export default PictureSection
