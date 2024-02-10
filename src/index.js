import dotenv from "dotenv";
import connnetDB from "./db/db.js";
dotenv.config({
  path: "./env",
});

connnetDB();
