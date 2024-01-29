// // First add choose city
// // Second after choosing the city - choose the hospital in that city - as Ryiadh has more than 4 hospitals.
// // Add mySQL or MongoDB connection as every thursday puppeteer function will run and save the data into
// //   the DB and then vercel will read the saved data from the DB mySQL or Mongo.

// import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState } from "react";
// import axios from "axios";

// const HabibData = () => {
//   const [chooseClinic, setChooseClinic] = useState("Choose Clinic");
//   const [allDoctors, setAllDoctors] = useState([]);
//   const [doctorAvailableTimes, setDoctorAvailableTimes] = useState([]);

//   // Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   const choosedClinic_FamilyMedicine = (event) => {
//     const innerText = event.target.innerText;
//     setChooseClinic(innerText);

//     axios
//       .get(
//         // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_FM"
//         // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_FM"
//         "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_FM"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setAllDoctors(response.data);
//       });
//   };

//   // Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   const choosedClinic_InternalMedicine = (event) => {
//     const innerText = event.target.innerText;
//     setChooseClinic(innerText);

//     axios
//       .get(
//         // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
//         "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setAllDoctors(response.data);
//       });
//   };

//   // Cardiology      : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   const choosedClinic_Cardiology = (event) => {
//     const innerText = event.target.innerText;
//     setChooseClinic(innerText);

//     axios
//       .get(
//         "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Cardio"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setAllDoctors(response.data);
//       });
//   };

//   // Endocrinology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   const choosedClinic_Endocrinology = (event) => {
//     const innerText = event.target.innerText;
//     setChooseClinic(innerText);

//     axios
//       .get(
//         "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Endo"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setAllDoctors(response.data);
//       });
//   };

//   // Nepherology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   const choosedClinic_Nepherology = (event) => {
//     // 1) Change the Button Name :
//     const innerText = event.target.innerText;
//     console.log("Nehphro innerText : ", innerText);
//     setChooseClinic(innerText);

//     // 2) Get the response from NodeJs :
//     axios
//       .get(
//         "http://localhost:3001/habibSchedule_Nephrology"
//         // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Nephrology"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setAllDoctors(response.data);
//       });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="habibPageContainer">
//         {/* <div className="basicInfo"></div> */}
//         <div className="column1">
//           <div className="dropdown">
//             <button className="dropbtn2">{chooseClinic}</button>
//             <div className="dropdown-content">
//               <a href="#" onClick={choosedClinic_FamilyMedicine}>
//                 Family Medicine
//               </a>
//               <a href="#" onClick={choosedClinic_InternalMedicine}>
//                 Internal Medicine
//               </a>
//               <a href="#" onClick={choosedClinic_Endocrinology}>
//                 Endocrinology
//               </a>
//               <a href="#" onClick={choosedClinic_Cardiology}>
//                 Cardiology
//               </a>{" "}
//               <a href="#" onClick={choosedClinic_Nepherology}>
//                 Nephrology
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* List Of Doctors */}

//         <div className="column2" style={{ marginLeft: "6rem", width: "95vh" }}>
//           {allDoctors.map((doctor, key) => {
//             return (
//               <div className="doctorData" key={key}>
//                 <div className="img&name" style={{ marginRight: "5rem" }}>
//                   <img src={`${doctor.Img}`}></img>
//                   <h4>
//                     {key + 1}- {doctor.Name}
//                   </h4>
//                 </div>

//                 <div
//                   className="date_times"
//                   style={{
//                     width: "700px",
//                     overflowX: "visible",
//                     whiteSpace: "nowrap",
//                     // marginLeft: "5rem",
//                   }}
//                 >
//                   <div
//                     className="element"
//                     style={{
//                       maxWidth: "30px",
//                       borderBottom: "1px solid #ccc",
//                       paddingBottom: "10px",
//                     }}
//                   >
//                     {/* <h4
//                       style={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(4, 1fr)",
//                         gap: "5px",
//                         // gridAutoRows: "minmax(100px, auto)",
//                       }}
//                     > */}
//                     {/* Times : */}
//                     {doctor.DateObj.map((time, id) => (
//                       <div
//                         key={id}
//                         style={{
//                           width: "150px",
//                           // marginRight: "10px",
//                           marginLeft: "20rem",
//                           // flexDirection: "row",
//                           // alignItems: "center",
//                           // justifyContent: "flex-end",
//                         }}
//                       >
//                         {/* Check if the date is not a duplicate */}

//                         {id === 0 ||
//                         time.Date !== doctor.DateObj[id - 1].Date ? (
//                           <>
//                             <h3
//                               style={{
//                                 color: "brown",
//                                 marginBottom: "5px", // Add margin bottom for spacing
//                               }}
//                             >
//                               {time.Date}
//                             </h3>
//                             <ul
//                               style={{
//                                 color: "blue",
//                                 gap: "5px",
//                                 display: "flex",
//                               }}
//                             >
//                               {time.Times.map((time, timeIndex) => (
//                                 <li key={timeIndex}>
//                                   <h4>{time}</h4>
//                                 </li>
//                               ))}
//                             </ul>
//                           </>
//                         ) : null}
//                       </div>
//                     ))}
//                     {/* </h4> */}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="listOfAppointments"></div>
//     </div>
//   );
// };

// export default HabibData;

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

import "../pages/pagesCSS/HabibData.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

const HabibData = () => {
  const [chooseClinic, setChooseClinic] = useState("Choose Clinic");
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorAvailableTimes, setDoctorAvailableTimes] = useState([]);

  // Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_FamilyMedicine = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get(
        // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_FM"
        // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_FM"
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_FM"
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
      .get(
        // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
      )
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
      .get(
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Cardio"
      )
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
      .get(
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Endo"
      )
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Nepherology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Nepherology = (event) => {
    // 1) Change the Button Name :
    const innerText = event.target.innerText;
    console.log("Nehphro innerText : ", innerText);
    setChooseClinic(innerText);

    // 2) Get the response from NodeJs :
    axios
      .get(
        "http://localhost:3001/habibSchedule_Nephrology"
        // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Nephrology"
      )
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  return (
    <>
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
      <div
        className="Doctors_Container1"
        style={
          {
            // transform: "translate3d(-0.982801%, 0px, 0px)",
          }
        }
      >
        <div
          className="Doctors_Container
          "
          style={{ marginLeft: "1rem", marginRight: "2rem" }}
        >
          {/* <div className="column2" style={{ marginLeft: "6rem", width: "95vh" }}> */}
          {allDoctors.map((doctor, key) => {
            return (
              <div
                className="section-doctors"
                style={{ width: "100%" }}
                key={key}
              >
                <div className="Container_Doctor">
                  <div
                    className="img&name"
                    // style={{ marginRight: "5rem" }}
                  >
                    <img src={`${doctor.Img}`}></img>
                    <h6>
                      {key + 1}- {doctor.Name}
                    </h6>
                  </div>

                  <div
                    className="date_times"
                    style={
                      {
                        // width: "700px",
                        // overflowX: "visible",
                        // whiteSpace: "nowrap",
                        // marginLeft: "5rem",
                      }
                    }
                  >
                    <div
                      className="element"
                      style={
                        {
                          // maxWidth: "30px",
                          // borderBottom: "1px solid #ccc",
                          // paddingBottom: "10px",
                        }
                      }
                    >
                      {/* Times : */}
                      {/* DateObj is from the Model */}
                      {doctor.DateObj.map((time, id) => (
                        <div
                          key={id}
                          style={{
                            width: "150px",
                            // marginRight: "10px",
                            // marginLeft: "20rem",
                            // flexDirection: "row",
                            // alignItems: "center",
                            // justifyContent: "flex-end",
                          }}
                        >
                          {/* Checking if the date is not a duplicate */}
                          {id === 0 ||
                          time.Date !== doctor.DateObj[id - 1].Date ? (
                            <>
                              <h7
                                style={{
                                  color: "brown",
                                  marginBottom: "5px", // Add margin bottom for spacing
                                }}
                              >
                                {time.Date}
                              </h7>
                              <ul
                                style={{
                                  color: "blue",
                                  fontSize: "15px",
                                  // gap: "5px",
                                  // display: "flex",
                                }}
                              >
                                {/* 1) First checking if the array is not empty - If empty we leave it without From to */}
                                {/* 2) Print the First time in the array and the Last index */}
                                {/* {<p>from</p>} */}
                                {/* {time.Times.map((eachTime, eachTimeIndex) => ( */}
                                {/* <li key={eachTimeIndex}> */}
                                {/* <p>{eachTime}</p> */}
                                {/* <p>{`${eachTime[0]}${eachTime[1]}`}</p> */}
                                {/* </li> */}
                                {/* ))} */}
                                {time.Times.length > 0 && (
                                  <div
                                    className="times"
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    <p
                                      style={{
                                        marginRight: "-1rem",
                                        marginLeft: "-1.2rem",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      from
                                    </p>
                                    <ul style={{ display: "flex" }}>
                                      <li>
                                        <p>{`${time.Times[0].slice(0, 2)}`}</p>
                                      </li>
                                      {time.Times.length > 1 && (
                                        <li
                                          style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                          }}
                                        >
                                          <p
                                            style={{
                                              marginRight: "0.5rem",
                                              marginLeft: "0.5rem",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            to
                                          </p>
                                          <p>{`${time.Times[
                                            time.Times.length - 1
                                          ].slice(0, 2)}`}</p>
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </ul>
                            </>
                          ) : null}
                        </div>
                      ))}
                      {/* </h4> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HabibData;
