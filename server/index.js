const fs = require("fs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();

// const RegisterModel = require("./models/Register");
const habib_Doctors_Model = require("./models/habibModel");
// "https://mern-api-habibschedule-vercel-frontend.vercel.app"
// "http://localhost:3000/"
app.use(
  cors({
    origin: ["https://mern-api-habibschedule-vercel-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/

mongoose
  .connect(
    // "mongodb+srv://basseloob:Basilpsp9111@alhabib-cluster.nnbcxyh.mongodb.net/testname2?retryWrites=true&w=majority"
    // "mongodb://basseloob:Basilpsp9111@ac-7hgzxvl-shard-00-00.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/testname2?ssl=true&replicaSet=atlas-x2jk5t-shard-0&authSource=admin&retryWrites=true&w=majority"
    // "mongodb://basseloob:Basilpsp9111@ac-7hgzxvl-shard-00-00.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/Habib_Doctors?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin"
    "mongodb://basseloob:Basilpsp9111@ac-7hgzxvl-shard-00-00.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/Habib_Doctors?ssl=true&replicaSet=atlas-x2jk5t-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoDB connected.");
  });

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// Routes :

// app.use("/habibUrl", habibRouter);

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
    const mongoDB_data = await habib_Doctors_Model.find({});

    if (mongoDB_data.length === 0) {
      return res.status(404).json({ error: "No data found!!!" });
    }

    console.log("MongoDB Data:", mongoDB_data);

    // 4) Response :
    // res.json(filePath);
    res.json(mongoDB_data);
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
