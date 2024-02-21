// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
const app = express()(
  // can be done like this but not a better approach
  // function connectDB() {}

  // connectDB();

  async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("ERROR", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR", error);
    }
  }
)();

*/
