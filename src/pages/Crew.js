import React, { useState } from "react";
import db from "../data.json";
import "../css/crew.css";

const Crew = () => {
  const initialState = {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };
  const [crewMember, setCrewMember] = useState(initialState);
  const totalCrewMebers = db.crew.length;
  console.log(totalCrewMebers);
  const { role, images, bio, name } = crewMember;
  const newCrewMember = (event, memberIndex) => {
    setCrewMember(db.crew[memberIndex]);
    const allDots = document.querySelectorAll(".crew_dot");
    allDots.forEach((elem) => {
      elem.classList.remove("active");
    });
    const targetElement = event.target;
    targetElement.classList.add("active");
  };

  return (
    <>
      <section className="crew">
        <div className="crew_overlay">
          <h1>
            <span>02</span> Meet your crew
          </h1>
          <article className="crew_article">
            <div className="crew_article_left">
              <h3>{role} </h3>
              <h1>{name}</h1>
              <p>{bio}</p>
              <div className="crew_dots_container">
                {[...[...Array(4).keys()]].map((memberIndex) => {
                  return (
                    <div
                      className={`crew_dot ${
                        memberIndex === 0 ? "active" : ""
                      }`}
                      key={memberIndex}
                      onClick={(event) => newCrewMember(event, memberIndex)}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="crew_article_right">
              <img
                src={images.png}
                alt="crew_member"
                className="crew_member_img"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Crew;
