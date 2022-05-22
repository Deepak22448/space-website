import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/destination" element={<Destination />} />
        </Routes>
        <Routes>
          <Route path="/crew" element={<Crew />} />
        </Routes>
        <Routes>
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
