const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const RegisterModel = require("./models/Register");
const habibModel = require("./models/habibModel");

const app = express();

app.use(
  cors({
    origin: ["https://mern-api-habibschedule-vercel-frontend.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/

mongoose
  .connect(
    "mongodb+srv://basseloob:Basilpsp9111@alhabib-cluster.nnbcxyh.mongodb.net/testname2?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoDB connected.");
  });

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// routes

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/habibSchedule_Nephrology", async (req, res) => {
  try {
    // 1) Get the Data from VScode file :
    // await get_Habib_Data(habib_Nephro_Url);
    // // 2) Sanitize the link removing / / :
    // const sanitized_Clinic_Parameter_Link = sanitize(habib_Nephro_Url);
    // // 3) Get the file Path :
    // const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);

    // 1) Get the Data from mongoDB :
    const mongoDB_data = await habibModel.find({}); // 4) Response :
    console.log("MongoDB Data:", mongoDB_data);

    // res.json(filePath);
    res.json({ data: mongoDB_data });
  } catch (error) {
    console.error("Error in /habibSchedule Nephro route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;
//   RegisterModel.findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         res.json("Already have an account");
//       } else {
//         RegisterModel.create({ name: name, email: email, password: password })
//           .then((result) => res.json(result))
//           .catch((err) => res.json(err));
//       }
//     })
//     .catch((err) => res.json(err));
// });

app.listen(3001, () => {
  console.log("Server is Running");
});
