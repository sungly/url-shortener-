// 3-rd party imports 

import express from "express";

const app = express(); 

app.get("/", (req, res) => res.send("url shortener set up!"));

app.listen(8080, () => console.log("Server starting on server 8080..."));