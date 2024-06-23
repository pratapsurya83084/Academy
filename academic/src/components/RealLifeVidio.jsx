import React from "react";

const RealLifeVidio = () => {
  return (
    <section className="px-4 py-10 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Discover real-life business enthusiasts who transform straight from
          those who attended my coaching
        </h1>
        <div className="flex justify-center mb-4">
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
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div className="w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute radius-yellow  top-0 left-0 w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/-qfJYcEn3Yg"
              title="Embedded Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute radius-yellow  top-0 left-0 w-full h-full rounded-3xl"
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
