import PORT from "./config/portConfig.js";
import express from "express";
import connectDB from "./config/dbConfig.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON THE PORT :${PORT}`);
  connectDB();
});
