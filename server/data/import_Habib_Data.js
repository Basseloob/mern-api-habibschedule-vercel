const mongoose = require("mongoose");
const { get_Habib_Data } = require("../middleWares/habibPuppeteer_Ware_copy");
// const dotenv = require("dotenv"); //  --> Enviroment variable...need to be before ./app file.
// dotenv.config({ path: ".././config.env" });

const fs = require("fs");
const habib_Doctors_Model = require("../models/habibModel");

const { dir } = require("console");
const { dirname } = require("path");

// const DB = process.env.DATABASE;
const DB =
  "mongodb://basseloob:Basilpsp9111@ac-7hgzxvl-shard-00-00.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin";

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    dbName: "Habib_Doctors",
  })
  .then((connectionObj) => {
    // console.log(connectionObj.connections);
    console.log(
      "DB connections successfully connected : " //, connectionObj.connections
    );
  })
  .catch((err) => console.log("Server Connection Error ", err));

////////////////////////////////////////////////////////////////////////////////////////////////////
// Array to store parsed data from multiple files
// const allData = [];

// const filePaths = [
//   `${__dirname}/nephroKBR.json`,
//   // `${__dirname}/family.json`,
//   // `${__dirname}/internal.json`,
// ];

// filePaths.forEach((filePath) => {
//   try {
//     const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//     allData.push(jsonData);
//   } catch (err) {
//     console.error(
//       `Error reading or parsing file ${filePath}: ${error.message}`
//     );
//   }
// });

// const habibKBR_Nephro_data = JSON.parse(
//   fs.readFileSync(
//     // `${__dirname}/httpshmgeservices.comloginProjectID=60&ClinicID=30&StrDate=%27%27&lang=en.json`,
//     `${__dirname}/nephroKBR.json`,
//     "utf-8"
//   )
// );
// const habibData = JSON.parse(
//   fs.readFileSync(
//     // `${__dirname}/httpshmgeservices.comloginProjectID=60&ClinicID=30&StrDate=%27%27&lang=en.json`,
//     `${__dirname}/habibData.json`,
//     "utf-8"
//   )
// );

// Khobar : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const habib_KBR_Im_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=1&StrDate=%27%27&lang=en";
const habib_KBR_Family_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=26&StrDate=%27%27&lang=en";
const habib_KBR_Cardio_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=21&StrDate=%27%27&lang=en";
const habib_KBR_Endo_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=14&StrDate=%27%27&lang=en";
const habib_KBR_Nephro_Url =
  'https://hmgeservices.com/login?ProjectID=60&ClinicID=30&StrDate=%27%27&lang=en"';

// IMPORT DATA INTO THE DATABASE
const importData = async () => {
  try {
    await get_Habib_Data(habib_KBR_Family_Url);
    await get_Habib_Data(habib_KBR_Im_Url);
    await get_Habib_Data(habib_KBR_Cardio_Url);
    await get_Habib_Data(habib_KBR_Endo_Url);
    await get_Habib_Data(habib_KBR_Nephro_Url);

    // const habibData = JSON.parse(
    //   fs.readFileSync(
    //     // `${__dirname}/httpshmgeservices.comloginProjectID=60&ClinicID=30&StrDate=%27%27&lang=en.json`,
    //     `${__dirname}/habibData.json`,
    //     "utf-8"
    //   )
    // );

    // // await habib_Doctors_Model.create(allData);
    // // await habib_Doctors_Model.create(habibKBR_Nephro_data);
    // await habib_Doctors_Model.create(habibData);

    console.log("Data successfully loaded into database !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM THE DATABASE COLLECTION
const deleteData = async () => {
  try {
    await habib_Doctors_Model.deleteMany();
    console.log("Data successfully deleted from database !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
