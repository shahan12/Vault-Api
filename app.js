const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(bodyParser.json());
//Middlewares
//app.use( '/' ,() =>{})
// import routes

const postRoute = require("./routes/posts");
app.use("/safes", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("we are home");
});

//making connections
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to db")
);

//to listen to the server we give listen and port number
const port = process.env.PORT || 3001;
app.listen(port);
