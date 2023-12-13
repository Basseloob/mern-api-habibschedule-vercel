// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
// Pages :
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import RegisteredUsers from "./pages/RegisteredUsers";
// import Register from "./pages/Register";
// import HabibData from "./pages/HabibData";
// import ManeaData from "./pages/ManeaData";
// import MowasatData from "./pages/MowasatData";

function App() {
  const [chosenHospital, setChoosenHsopital] = useState("Welcome");
  const [chooseClinic, setChooseClinic] = useState("Choose Clinic");
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorAvailableTimes, setDoctorAvailableTimes] = useState([]);

  const showHabibData = () => {
    // axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
    // const data = response.data.message;
    // console.log(data);
    // });
    console.log("this is Al-Habib Hospital");
    setChoosenHsopital("Al-Habib");
  };

  const showManeaData = () => {
    console.log("this is Manea Hospital");
    setChoosenHsopital("Al-Manea");
  };

  const showMowasatData = () => {
    console.log("this is Moawast Hospital");
    setChoosenHsopital("Al-Mowasat");
  };

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  // Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_FamilyMedicine = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get(
        // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_FM"
        "http://localhost:3001/habibUrl/habibSchedule_FM"
      )
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_InternalMedicine = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_IM")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Cardiology      : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Cardiology = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_Cardio")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Endocrinology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Endocrinology = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_Endo")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Nepherology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Nepherology = (event) => {
    const innerText = event.target.innerText;
    console.log("Nehphro innerText : ", innerText);
    setChooseClinic(innerText);

    axios
      .get(
        // "http://localhost:3001/habibUrl/habibSchedule_Nephrology"
        // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_Nephrology"
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Nephrology"
      )
      .then((response) => {
        // console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  return (
    <div
      className="body"
      style={{ content: "width=device-width", scale: "1.0" }}
    >
      {/* <Router> */}
      <header>
        <div className="links">
          <a href="/login">Login</a>
          <a href="/register">Registeration</a>
          <a href="/">Home Page</a>
          {/* <Link to="/login">Login</Link>
          <Link to="/register">Registeration</Link>

          <Link to="/">Home Page</Link> */}
          <h3 style={{ paddingLeft: 100 }}> {chosenHospital}</h3>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Show Hospitals</button>
          <div className="dropdown-content">
            <a href="/habibData" onClick={showHabibData}>
              Al-habib
            </a>
            {/* <Link to="/habibData" onClick={showHabibData}>
              Al-habib
            </Link>
            <Link to="/maneaData" onClick={showManeaData}>
              Al-Manea
            </Link>
            <Link to="/mowasatData" onClick={showMowasatData}>
              Al-Mowasat
            </Link> */}
          </div>
        </div>
      </header>

      {/* <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/login" exact Component={Login}></Route>
          <Route path="/register" exact Component={Register}></Route>
          <Route path="/habibData" exact Component={HabibData}></Route>
          <Route path="/maneaData" exact Component={ManeaData}></Route>
          <Route path="/mowasatData" exact Component={MowasatData}></Route>
        </Routes> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="habibPageContainer">
          {/* <div className="basicInfo"></div> */}
          <div className="column1">
            <div className="dropdown">
              <button className="dropbtn2">{chooseClinic}</button>
              <div className="dropdown-content">
                <a href="#" onClick={choosedClinic_FamilyMedicine}>
                  Family Medicine
                </a>
                <a href="#" onClick={choosedClinic_InternalMedicine}>
                  Internal Medicine
                </a>
                <a href="#" onClick={choosedClinic_Endocrinology}>
                  Endocrinology
                </a>
                <a href="#" onClick={choosedClinic_Cardiology}>
                  Cardiology
                </a>{" "}
                <a href="#" onClick={choosedClinic_Nepherology}>
                  Nephrology
                </a>
              </div>
            </div>
          </div>

          {/* List Of Doctors */}

          <div
            className="column2"
            style={{ marginLeft: "6rem", width: "95vh" }}
          >
            {allDoctors.map((doctor, key) => {
              return (
                <div className="doctorData" key={key}>
                  <div className="img&name" style={{ marginRight: "5rem" }}>
                    <img src={`${doctor.Img}`}></img>
                    <h4>
                      {key + 1}- {doctor.Name}
                    </h4>
                  </div>

                  <div
                    className="date_times"
                    style={{
                      width: "700px",
                      overflowX: "visible",
                      whiteSpace: "nowrap",
                      // marginLeft: "5rem",
                    }}
                  >
                    <div
                      className="element"
                      style={{
                        maxWidth: "30px",
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "10px",
                      }}
                    >
                      {/* <h4
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "5px",
                        // gridAutoRows: "minmax(100px, auto)",
                      }}
                    > */}
                      {/* Times : */}
                      {doctor.DateObj.map((time, id) => (
                        <div
                          key={id}
                          style={{
                            width: "150px",
                            // marginRight: "10px",
                            marginLeft: "20rem",
                            // flexDirection: "row",
                            // alignItems: "center",
                            // justifyContent: "flex-end",
                          }}
                        >
                          {/* Check if the date is not a duplicate */}

                          {id === 0 ||
                          time.Date !== doctor.DateObj[id - 1].Date ? (
                            <>
                              <h3
                                style={{
                                  color: "brown",
                                  marginBottom: "5px", // Add margin bottom for spacing
                                }}
                              >
                                {time.Date}
                              </h3>
                              <ul
                                style={{
                                  color: "blue",
                                  gap: "5px",
                                  display: "flex",
                                }}
                              >
                                {time.Times.map((time, timeIndex) => (
                                  <li key={timeIndex}>
                                    <h4>{time}</h4>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                        </div>
                      ))}
                      {/* </h4> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="listOfAppointments"></div>
      </div>

      {/* <footer>
        <p>Basseloob</p>
      </footer> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
