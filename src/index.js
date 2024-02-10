import dotenv from "dotenv";
import connnetDB from "./db/db.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connnetDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running as port ${process.env.PORT}`);
    });
  })

  
  .catch((err) => {
    console.log("Mongo Db connection failed !!! ", err);
  });
