import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => {
    const menuBtn = document.querySelector(".menu_btn");
    const navLinks = document.querySelector(".nav_links");
    const navLink = document.querySelectorAll(".nav_link");

    navLink.forEach((link) => {
      link.classList.toggle("active");
    });

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
          <div className="circle_logo">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <h1 className="logo_name">ASTRO</h1>
            </Link>
          </div>
        </div>
        <ul className="nav_links ">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <li className="nav_link" onClick={currentPage}>
              <span className="nav_number">00</span>
              Home
            </li>
          </Link>
          <Link
            to={"/destination"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="nav_link" onClick={currentPage}>
              <span className="nav_number">01</span>
              Destination
            </li>
          </Link>
          <Link to={"/crew"} style={{ textDecoration: "none", color: "white" }}>
            <li className="nav_link" onClick={currentPage}>
              <span className="nav_number">02</span>
              Crew
            </li>
          </Link>
          <Link
            to={"/technology"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="nav_link" onClick={currentPage}>
              <span className="nav_number">03</span>
              Technology
            </li>
          </Link>
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
