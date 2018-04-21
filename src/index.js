// 3-rd party imports 

import express from "express";

const app = express(); 

app.get("/", (req, res) => res.send("url shortener set up!"));

app.post("/api/encodeUrl", (req, res) => {
  // return a shorten version of the original url
});

app.get("/api/decodeUrl", (req, res) => {
  // get the original url from the shorten url
});

app.listen(8080, () => console.log("Server starting on server 8080..."));