import React from "react";
import "../css/destination.css";
import { useState } from "react";
import db from "../data.json";
const initialState = {
  images: {
    png: "./assets/destination/image-moon.png",
  },
  name: "Moon",
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travel: "3 days",
};
const Destination = () => {
  const [data, setData] = useState(initialState);

  const fetchNewData = (event) => {
    const { destinations } = db;
    const destinationLinks = document.querySelectorAll(
      ".destination_right_link"
    );
    destinationLinks.forEach((link) => {
      link.style.border = "none";
    });
    const targetLink = event.target;
    console.log([...destinationLinks]);
    targetLink.style.borderBottom = "2px solid white";
    const name = event.target.innerText.toLowerCase();
    const newData = destinations.filter((destination) => {
      return name === destination.name.toLowerCase();
    });
    console.log(newData[0]);

    setData(newData[0]);
  };
  const { images, name, description, distance, travel } = data;
  return (
    <section className="destination">
      <div className="destination_overlay">
        <h1>
          <span>01</span>Pick your destination
        </h1>
        <article className="destination_article">
          <div className="destination_left">
            <img src={images.png} alt="moon.png" className="destination_img" />
          </div>

          <div className="destination_right">
            <nav>
              <ul>
                <li
                  onClick={fetchNewData}
                  className="destination_right_link"
                  style={{ borderBottom: "1px solid white" }}
                >
                  MOON
                </li>
                <li onClick={fetchNewData} className="destination_right_link">
                  MARS
                </li>
                <li onClick={fetchNewData} className="destination_right_link">
                  EUROPA
                </li>
                <li onClick={fetchNewData} className="destination_right_link">
                  TITAN
                </li>
              </ul>
            </nav>
            <h1 className="planet_name">{name}</h1>
            <p className="planet_description"> {description}</p>
            <div className="destination_right_bottom">
              <div>
                <h6>AVG. DISTANCE</h6>
                <p>{distance}</p>
              </div>
              <div>
                <h6>Est. travel time</h6>
                <p>{travel}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Destination;
