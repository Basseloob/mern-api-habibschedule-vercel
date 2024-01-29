import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisteredUsers from "./pages/RegisteredUsers";
import Register from "./pages/Register";
import HabibData from "./pages/HabibData";
import ManeaData from "./pages/ManeaData";
import MowasatData from "./pages/MowasatData";

// Icons
// import { render } from "react-dom";
// import { ListOutline } from "react-ionicons";
import list_Icon from "./img/icons8-list-24.png";
import clock_Icon from "./img/clock-logo.png";

function App() {
  const [chosenHospital, setChosenHospital] = useState("Welcome");
  const [imageSource, setImageSource] = useState(list_Icon);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const changeImageSource = () => {
    // const nextImageSource = imageSource === list_Icon ? clock_Icon : list_Icon;
    // setImageSource(nextImageSource);
    // Toggle the visibility of the navigation elements
    setIsNavVisible(true);
  };

  const showNavigation_Elements = () => {
    return (
      <nav
        className={`main-nav ${isNavVisible ? "nav-visible" : "nav-hidden"}`}
        style={{
          transition: "all 0.4s ease-in",
          transform: isNavVisible ? "translate(0)" : "translate(100%)",
        }}
      >
        <ul className="main-nav-list">
          <div>
            <h3
              onClick={() => {
                setIsNavVisible(false);
              }}
              style={{ marginTop: "-3rem", color: "red" }}
            >
              Close
            </h3>
          </div>

          <li>
            <Link
              className="main-nav-link"
              to="/habibData"
              onClick={() => {
                showHabibData();
                setIsNavVisible(false);
              }}
            >
              Al-habib
            </Link>
          </li>
          <li>
            {/* <a className="main-nav-link" href="#mowasatDammam">
              Al-Mowasat
            </a> */}
            <Link
              className="main-nav-link"
              to="/mowasatData"
              onClick={() => {
                showMowasatData();
                setIsNavVisible(false);
              }}
            >
              Al-Mowasat
            </Link>
          </li>
          <li>
            {/* <a className="main-nav-link" href="#manea">
              Al-Manea
            </a> */}
            <Link
              className="main-nav-link"
              to="/maneaData"
              onClick={() => {
                showManeaData();
                setIsNavVisible(false);
              }}
            >
              Al-Manea
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  const showHabibData = () => {
    console.log("this is Al-Habib Hospital");
    setChosenHospital("Al-Habib");
  };

  const showManeaData = () => {
    console.log("this is Manea Hospital");
    setChosenHospital("Al-Manea");
  };

  const showMowasatData = () => {
    console.log("this is Moawast Hospital");
    setChosenHospital("Al-Mowasat");
  };

  return (
    <div className="body">
      <Router>
        <header className="header nav-open">
          {/* <header className="header"> */}
          <a href="#">
            <img
              className="logo"
              alt="clock logo"
              src={require("./img/clock-logo.png")}
            />
          </a>

          {/* Welcome */}
          <h2>{chosenHospital}</h2>

          {/* Nav Elements */}
          {/* {showNavigation_Elements()} */}
          {/* {isElementVisible} */}

          <button className="btn-mobile-nav">
            <img
              className="icon-mobile-nav"
              data-name="open-menu-outline"
              alt="list logo"
              src={imageSource}
              onClick={() => {
                // OnClicking it will change the logo & change nav showing or not showing.
                changeImageSource();
                // setIsElementVisible(showNavigation_Elements());
                // setIsNavVisible(showNavigation_Elements());
              }}
            />
          </button>
        </header>

        <div className="gird">
          <Link
            style={{ marginRight: "1.5rem" }}
            to="/habibData"
            onClick={showHabibData}
          >
            Al-habib
          </Link>
          <Link
            style={{ marginRight: "1.5rem" }}
            to="/maneaData"
            onClick={showManeaData}
          >
            Al-Manea
          </Link>
          <Link
            style={{ marginRight: "1.5rem" }}
            to="/mowasatData"
            onClick={showMowasatData}
          >
            Al-Mowasat
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/habibData" element={<HabibData />} />
          <Route path="/maneaData" element={<ManeaData />} />
          <Route path="/mowasatData" element={<MowasatData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
