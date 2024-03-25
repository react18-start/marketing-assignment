"use client";
import React, { useState } from "react";
import Link from "next/link";
import image from "@/app/images/image1.png";
import image1 from "@/app/images/image1.png";
import image2 from "@/app/images/Rectangle 530.png";
import image3 from "./images/Rectangle 531.png";
import image4 from "./images/Rectangle 532.png";
import Card from "./Card";
import BorderImage from "./images/Vector 128.svg";
import Image from "next/image";
import "./App.css";

export default function Home() {
  const [showRegions, setShowRegions] = useState(false);

  const toggleRegions = () => {
    setShowRegions(!showRegions);
  };

  const handleRegionClick = (region) => {
    // Assuming your locales are set up in your Next.js project
    // And you have pages like /en-US, /en-UK, etc.
    // If not, adjust this logic accordingly
    window.location.href = `/en-${region.toLowerCase()}`;
  };

  return (
    <>
      <div className="figma">
        <div className="frame">
          <div className="header">
            <p className="font-medium text-xl">NETSOL</p>
            <div className="drop-down">
              <button className="btn text-lg " onClick={toggleRegions}>
                Regions
              </button>
              {showRegions && (
                <div className="dropdown">
                  <ul>
                    <li
                      onClick={() => handleRegionClick("USA")}
                      // className={
                      //   originId && originId.includes("usa") && "active"
                      // }
                    >
                      USA
                      <hr className="border-line" />
                    </li>
                    <li
                      onClick={() => handleRegionClick("UK")}
                      // className={
                      //   originId && originId.includes("uk") && "active"
                      // }
                    >
                      UK
                      <hr className="border-line" />
                    </li>
                    <li
                      onClick={() => handleRegionClick("China")}
                      // className={
                      //   originId && originId.includes("china") && "active"
                      // }
                    >
                      China
                      <hr className="border-line" />
                    </li>
                    <li
                      onClick={() => handleRegionClick("Pakistan")}
                      // className={
                      //   originId && originId.includes("pakistan") && "active"
                      // }
                    >
                      Pakistan
                      <hr className="border-line" />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <Image src={BorderImage} />
          <div className="content mt-5">
            <button className="text-lg">News and Insight</button>
            <div className="p3">Latest Insight from Leading Voices</div>
            <div className="p1">
              Solving the world’s problems through technology wouldn’t be
              possible without our most important <br /> invention: the NetSol.
              Have a look at our talented teams.
            </div>
            <div className="p2">
              View All News
              <div className="flex justify-center">
                <hr className="w-[7%] flex justify-center" />
              </div>
            </div>
          </div>
          <div className="cards">
            <Card
              image={image1}
              btnTitle={"NEWS"}
              heading={"Leasing Life Conference & Awards"}
              description={
                <p>
                  Solving the world’s problems through technology wouldn’t be
                  possible without our most important invention.
                </p>
              }
            />
            <Card
              image={image2}
              btnTitle={"BLOG"}
              heading={"Auto Finance Summit 2023"}
              description={
                <p>
                  Solving the world’s problems through technology wouldn’t be
                  possible without our most important invention.
                </p>
              }
            />
            <Card
              image={image3}
              btnTitle={"NEWS"}
              heading={"Careers at Netsol"}
              description={
                <p>
                  Solving the world’s problems through technology wouldn’t be
                  possible without our most important invention.
                </p>
              }
            />

            <Card
              image={image4}
              btnTitle={"BLOG"}
              heading={"Leasing Life Conference & Awards"}
              description={
                <p>
                  Solving the world’s problems through technology wouldn’t be
                  possible without our most important invention.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
