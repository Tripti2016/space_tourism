"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../assets/images/shared/logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActivePage = (page) => {
    console.log("setting page", page);
    setActivePage(page)
  };

  return (
    <div className="main-nav">
      <header className="primary-header flex">
        <div className="logo-img">
          <Image src={Logo} alt="/" className="logo" />
        </div>
        <button
          className="mobile-menu-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        ></button>
        <nav>
          <ul
            id="primary-navigation"
            className={`primary-navigation underline-indicator flex ${
              isOpen ? "active" : ""
            }`}
            role="navigation"
            style={{ "--gap": "8rem" }}
          >
            <li  aria-selected={activePage === 'home'} className={activePage === 'home' ? 'active' : ''}>
              <Link
                className="ff-sans-normal uppercase text-accent letter-spacing-2 fs-300"
                href="/"
                onClick={() => handleSetActivePage("home")}
              >
                <span aria-hidden="true">00</span> Home
              </Link>
            </li>
            <li aria-selected={activePage === 'destination'} className={activePage === 'destination' ? 'active' : ''}>
              <Link
                className="ff-sans-normal uppercase text-accent letter-spacing-2 fs-300"
                href="/destination"
                onClick={() => handleSetActivePage("destination")}
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li  aria-selected={activePage === 'crew'} className={activePage === 'crew' ? 'active' : ''}>
              <Link
                className="ff-sans-normal uppercase text-accent letter-spacing-2 fs-300"
                href="/crew"
                onClick={() => handleSetActivePage('crew')}
              >
                <span aria-hidden="true">02</span> Crew
              </Link>
            </li>
            <li  aria-selected={activePage === 'technology'} className={activePage === 'technology' ? 'active' : ''}>
              <Link
                className="ff-sans-normal uppercase text-accent letter-spacing-2 fs-300"
                href="/technology"
                onClick={() => handleSetActivePage('technology')}
              >
                <span aria-hidden="true">03</span> Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
