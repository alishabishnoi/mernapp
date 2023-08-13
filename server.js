//Connect to mongodb database(locally)
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const cors=require("cors");
app.use(cors());

app.use(express.json());

const userRoute=require("./routes/userRoute");


mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

  //app.use(userRoute); you can add more node before the final one
  //app.use("/api/user",userRoute);means ab final url banega http://localhost:5000/api/user/
  app.use(userRoute);

