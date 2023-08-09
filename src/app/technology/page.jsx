"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [landscapeImageHeight, setLandscapeImageHeight] = useState(500);

  const handleResize = () => {
    if (window.innerWidth <= 1034) {
      setLandscapeImageHeight(300); // Adjust the height as needed
    } else {
      setLandscapeImageHeight(500); // Default height for landscape
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const technologyData = [
    {
      name: "Launch vehicle",
      images: {
        portrait: "/images/technology/image-launch-vehicle-portrait.jpg",
        landscape: "/images/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "/images/technology/image-spaceport-portrait.jpg",
        landscape: "/images/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "/images/technology/image-space-capsule-portrait.jpg",
        landscape: "/images/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  return (
    <div>
      <div className="technology">
        <div className="techno-container-main">
          <h1 className="number-title">
            <span aria-hidden="true">03</span> SPACE LAUNCH 101
          </h1>
          <div className="grid-container techno-container">
            <div className="container-left">
              <div className="techno-content">
                <div className="circle-indicators ">
                  {technologyData.map((item, index) => (
                    <button
                      key={index}
                      aria-selected={index === activeTab}
                      className={`text-white ${
                        index === activeTab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <article className="uppercase ff-serif desination-article">
                  <h5 className="fs-300 text-accent uppercase letter-spacing-2">
                    THE TERMINOLOGY…
                  </h5>
                  <h2 className="fs-700 text-white uppercase">
                    {technologyData[activeTab].name}
                  </h2>
                  <p className="fs-400 text-accent">
                    {technologyData[activeTab].description}
                  </p>
                </article>
              </div>
            </div>
            <div className="container-right">
              <div className="technology-image">
                <Image
                  src={
                    useMediaQuery("(orientation: landscape)")
                      ? technologyData[activeTab].images.landscape
                      : technologyData[activeTab].images.portrait
                  }
                  alt="technology-img"
                  width={500}
                  height={500}
                  className={
                    useMediaQuery("(orientation: landscape)") &&
                    window.innerWidth <= 1034
                      ? "landscape-image"
                      : "portrait-image"
                  }
                  style={{
                    "--landscape-image-height": `${landscapeImageHeight}px`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
