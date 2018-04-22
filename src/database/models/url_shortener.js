// 3-rd party imports 

import mongoose from "mongoose";
const { schema } = mongoose;

// schema 

const urlShortener = new schema({
  originalUrl: String, 
  uniqueCode: String, 
  shortenUrl: String, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

mongoose.model("urlShortener", urlShortener);