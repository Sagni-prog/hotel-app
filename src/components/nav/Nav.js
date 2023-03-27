import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <header className="">
      <nav className="hero__main-nav">
        <ul className="hero__main-nav-list">
          <li>
            <a href="hero__main-nav-link">Home</a>
          </li>
          <li>
            <a href="hero__main-nav-link">Rooms</a>
          </li>
          <li>
            <a href="hero__main-nav-link">Resto & Bars</a>
          </li>
          <li>
            <a href="hero__main-nav-link">Services</a>
          </li>
          <li>
            <a href="hero__main-nav-link">Testimonials</a>
          </li>
          <li>
            <a href="hero__main-nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
