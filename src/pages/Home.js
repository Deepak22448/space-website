import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <div className="home_background">
        <div className="home_wrapper">
          <div className="home_wrapper_left">
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home_wrapper_right">
            <div className="home_explore_circle">
              <h1>EXPLORE</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
