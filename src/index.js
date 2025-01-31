import PORT from "./config/portConfig.js";
import express from "express";
import connectDB from "./config/dbConfig.js";
import appRouter from "./router/index.js";
import cors from "cors";

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors()); // Enable CORS for all origins (can be configured if needed)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON THE PORT :${PORT}`);
  connectDB();
});
