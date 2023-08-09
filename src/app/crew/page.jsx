"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const page = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % CrewData.length);
    }, 5000); // Change the interval duration as needed (e.g., 5000ms = 5 seconds)

    return () => {
      clearInterval(autoPlayTimer);
    };
  }, []);
  const CrewData = [
    {
      name: "Douglas Hurley",
      images: {
        png: "/images/crew/image-douglas-hurley.png",
        webp: "/images/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "/images/crew/image-mark-shuttleworth.png",
        webp: "/images/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "/images/crew/image-victor-glover.png",
        webp: "/images/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "/images/crew/image-anousheh-ansari.png",
        webp: "/images/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];
  return (
    <div className="crew">
      <div className="crew-container-main">
      
        <h1 className="number-title">
          <span aria-hidden="true">02</span>Meet your crew
        </h1>
        <div className="grid-container crew-container">
          <div className="crew-left">
            <div className="slides-container">
              <article className="uppercase ff-serif desination-article">
                <div className="crew-content">
                  <h3 className="text-accent fs-500 ff-serif uppercase letter-spacing-1">
                    {CrewData[activeSlide].role}
                  </h3>
                  <h2 className="text-white fs-700 ff-serif">
                    {CrewData[activeSlide].name}
                  </h2>
                  <p className="text-accent fs-200 ff-sans-cond uppercase letter-spacing-1">
                    {CrewData[activeSlide].bio}
                  </p>
                </div>

                <div className="dot-indicators flex crew-slide">
                  {CrewData.map((_, index) => (
                    <button
                      key={index}
                      className={`dot-indicator ${
                        index === activeSlide ? "active" : ""
                      }`}
                      aria-selected={index === activeSlide}
                      onClick={() => handleDotClick(index)}
                    >
                      <span className="sr-only">{`slide-${index + 1}`}</span>
                    </button>
                  ))}
                </div>
              </article>
            </div>
          </div>
          <div className="crew-right">
            <Image
              src={CrewData[activeSlide].images.png}
              alt={CrewData[activeSlide].name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
