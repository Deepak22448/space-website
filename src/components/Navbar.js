import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    const menuBtn = document.querySelector(".menu_btn");
    const navLinks = document.querySelector(".nav_links");

    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  };
  const currentPage = (event) => {
    const navLinks = document.querySelectorAll(".nav_link");
    navLinks.forEach((element) => {
      element.style.border = "none";
    });
    if (event.target.classList.contains("nav_link"))
      event.target.style.borderBottom = "1px solid white";
  };
  return (
    <>
      <header className="nav_wrapper">
        <div className="left">
          <div className="circle_logo"></div>
        </div>
        <ul className="nav_links ">
          <li className="nav_link" onClick={currentPage}>
            <span className="nav_number">00</span>
            Home
          </li>
          <li className="nav_link" onClick={currentPage}>
            <span className="nav_number">00</span>
            Destination
          </li>
          <li className="nav_link" onClick={currentPage}>
            <span className="nav_number">00</span>
            Crew
          </li>
          <li className="nav_link" onClick={currentPage}>
            <span className="nav_number">00</span>
            Technology
          </li>
        </ul>
        <div className="menu_btn" onClick={toggleMenu}>
          <span className="menu_line line1"></span>
          <span className="menu_line line2"></span>
          <span className="menu_line line3"></span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
