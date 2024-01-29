import "../pages/pagesCSS/HabibData.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

const HabibData = () => {
  const [chooseClinic, setChooseClinic] = useState("Choose Clinic");
  const [allDoctors_Data, setAllDoctors_Data] = useState([]);
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
        setAllDoctors_Data(response.data);
      });
  };

  // Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_InternalMedicine = (event) => {
    // 1)
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    // 2)
    axios
      .get(
        // "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_IM"
      )
      .then((response) => {
        console.log(response.data);
        setAllDoctors_Data(response.data);
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
        setAllDoctors_Data(response.data);
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
        setAllDoctors_Data(response.data);
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
        // "http://localhost:3001/habibSchedule_Nephrology"
        "https://mern-api-habibschedule-vercel-server.vercel.app/habibSchedule_Nephrology"
      )
      .then((response) => {
        console.log(response.data);
        setAllDoctors_Data(response.data);
      });
  };

  return (
    // <>
    // <section className="section-speciality">
    //   <button onClick={choosedClinic_FamilyMedicine}>Family Medicine</button>
    //   <button onClick={choosedClinic_Endocrinology}>Endocrinology</button>
    //   <button onClick={choosedClinic_InternalMedicine}>
    //     Internal Medicine
    //   </button>
    //   <button onClick={choosedClinic_Cardiology}>Cardiology</button>
    //   <button on onClick={choosedClinic_Nepherology}>
    //     Nepherology
    //   </button>
    // </section>

    <section className="section-doctors">
      <section className="section-speciality">
        <button
          onClick={() => {
            choosedClinic_FamilyMedicine();
          }}
        >
          Family Medicine
        </button>
        <button
          onClick={() => {
            choosedClinic_Endocrinology();
          }}
        >
          Endocrinology
        </button>
        <button
          onClick={() => {
            choosedClinic_InternalMedicine();
          }}
        >
          Internal Medicine
        </button>
        <button
          onClick={() => {
            choosedClinic_Cardiology();
          }}
        >
          Cardiology
        </button>
        <button
          on
          onClick={() => {
            choosedClinic_Nepherology();
          }}
        >
          Nepherology
        </button>
      </section>

      <div className="container center-text">
        <span className="subheading">{/* Speciality */}</span>
      </div>

      <div className="container grid grid--2-cols">
        {allDoctors_Data.map((doctor, key) => {
          //   {/* 1) First checking if Times array is not empty - No Print the Doctor */}

          return (
            <div className="doctor" key={key}>
              <div className="image">
                <img
                  className="doctor-img"
                  alt="doctor photo"
                  // src="https://hmgwebservices.com/Images/MobileImages/KHOBAR/304264.png"
                  src={`${doctor.Img}`}
                ></img>
              </div>

              <div className="doctor-content">
                <h5 className="tag tag--name">
                  Dr. {doctor.Name.split(" ").slice(0, 1)}
                </h5>

                <h5 className="tag tag--speciality">{doctor.Speciality}</h5>

                {doctor.DateObj.map(
                  (DateObj, dateIndex) =>
                    //   {/* 1) First checking if Times array is not empty - No Print the Date */}
                    //   {/* 2) Print the first Time in the array and the Last index using && */}
                    // DateObj.Times.length > 0 && (
                    DateObj.Times.length > 0 && (
                      <h5 key={dateIndex} className="tag tag--date">
                        {DateObj.Date}
                        <ul className="time-attributes">
                          <li className="times">
                            {/* From */}
                            <p className="time">{`  ${DateObj.Times[0]}  `}</p>
                            To
                            <p className="time">
                              {` ${DateObj.Times[DateObj.Times.length - 1]}`}{" "}
                            </p>
                          </li>
                        </ul>
                      </h5>
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
    // </>
  );
};

export default HabibData;
