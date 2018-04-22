// 3-rd party imports 

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// connect go mongodb 

const mongoURI = "mongodb://localhost/url-shortner";
const connectionOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
}

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectionOptions, (error, db) => {
  if (error) console.log("Error connecting to mongodb: ", error);
  console.log("Connected to mongodb");
})

const app = express(); 

// body-parser

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("url shortener set up!"));

app.post("/api/encodeUrl", (req, res) => {
  // return a shorten version of the original url
});

app.get("/api/decodeUrl", (req, res) => {
  // get the original url from the shorten url
});

app.listen(8080, () => console.log("Server starting on server 8080..."));