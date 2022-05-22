import React, { useState } from "react";
import "../css/technology.css";
import db from "../data.json";

const initialState = {
  name: "Launch vehicle",
  images: {
    portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
    landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
  },
  description:
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};
const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(initialState);
  const totalTechnology = db.technology;
  const { name, images, description } = currentTechnology;
  const fetchNewTechnology = (event) => {
    const fetchtechnologyName = event.target.getAttribute("name");
    const allTechnologyNumbers =
      document.querySelectorAll(".technology_number");
    // remove the active background from previous active element
    allTechnologyNumbers.forEach((element) => {
      element.classList.remove("active");
    });
    // change the backgroundcolor of active technology number
    event.target.classList.add("active");
    // fetching data for new technology
    const newTechnology = db.technology.filter((technology) => {
      return technology.name === fetchtechnologyName;
    });
    setCurrentTechnology(newTechnology[0]);
  };
  return (
    <section className="technology">
      <div className="technology_overlay">
        <h1>
          <span>03</span>SPACE LAUNCH 101
        </h1>
        <article className="technology_article">
          <div className="technology_numbers">
            {totalTechnology.map((technology, index) => {
              return (
                <div
                  className={`technology_number ${index === 0 ? "active" : ""}`}
                  key={index + 1}
                  name={technology.name}
                  onClick={fetchNewTechnology}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <div className="technology_info">
            <p>The Terminology...</p>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <div className="technology_img_container">
            <img src={images.portrait} alt={name} className="technology_img" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Technology;
