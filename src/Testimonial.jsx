import React, { useState } from "react";

import tayo from "./assets/tayo.jpg"
import chinedu from "./assets/chinedu.jpeg"
import amaka from "./assets/amaka.jpg"

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: `"SturdyPadi gave me the confidence to dive into tech. The assessment was spot-on, and the resources were exactly what I needed to start my journey. Highly recommend it!"`,
      name: "Tayo Adeoye, Aspiring Frontend Developer",
      image: tayo,
    },
    {
      text: `"As someone with no tech background, I was overwhelmed by the options. SturdyPadi's guidance helped me find my niche and stay focused. It's a game-changer!"`,
      name: "Amaka Nwankwo, CyberSecurity Enthusiast",
      image: amaka,
    },
    {
      text: `"The personalized recommendations and learning materials from SturdyPadi were invaluable. I’m now exploring a career in tech with clarity and purpose!"`,
      name: "Chinedu Okafor, Budding UI/UX designer",
      image: chinedu,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative py-20 px-11" id="carouselExampleCaptions">

<div class="mb-12 text-center">
        <h2 class="text-gray-800 text-3xl font-extrabold">See What Others Are Saying About Their Journey with Sturdy<span className='italic text-[#007bff]'>Padi </span></h2>
      </div>

      {/* Testimonials */}
      <div className="relative w-full overflow-hidden ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative float-left w-full text-center transition-transform duration-600 ease-in-out ${
              index === activeIndex ? "block" : "hidden"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="mx-auto max-w-4xl text-xl italic text-black">
              {testimonial.text}
            </p>
            <div className="mb-6 mt-12 flex justify-center">
              <img
                src={testimonial.image}
                className="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt={testimonial.name}
              />
            </div>
            <p className="text-blue-600 font-semibold text-lg">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center text-blue-600"
        onClick={handlePrev}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center text-black "
        onClick={handleNext}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Testimonial;
