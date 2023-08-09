"use client";

import Image from "next/image";
import Destination from "../../assets/images/destination/image-moon.png";
import { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState(0);
  const destinationData = [
    {
      name: "Moon",
      images: {
        png: "/images/destination/image-moon.png",
        // webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "/images/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "/images/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "/images/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];
  return (
    <div className="destination">
      <div className="grid-container grid-container-destination">
        <div className="destination-left">
          <h1 className="number-title ">
            <span aria-hidden="true">01</span>01 Pick your destination
          </h1>
          <Image
            src={destinationData[activeTab].images.png}
            alt="/"
            width={400}
            height={400}
          />
        </div>
        <div className="destination-right">
          <div className="tab-list underline-indicator flex ">
            {destinationData.map((article, index) => (
              <button
                key={index}
                aria-selected={index === activeTab}
                className={`uppercase text-white ff-sans-cond ${
                  index === activeTab ? "active" : ""
                } `}
                onClick={() => setActiveTab(index)}
              >
                {article.name}
              </button>
            ))}
          </div>
          <article className="uppercase ff-serif desination-article">
            <div className="right-one">
              <h2 className="fs-800 text-white uppercase">
                {destinationData[activeTab].name}
              </h2>
              <p className="fs-400 text-accent">
                {destinationData[activeTab].description}
              </p>
            </div>
            <div className="flex destination-details">
              <div>
                <h3 className="text accent fs-200 upeercase">Avg. distance</h3>
                <p className="fs-500 ff-serif uppercase">
                  {destinationData[activeTab].distance}
                </p>
              </div>
              <div>
                <h3 className="text accent fs-200 upeercase">
                  Est. travel time
                </h3>
                <p className="fs-500 ff-serif uppercase">
                  {destinationData[activeTab].travel}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Page;
