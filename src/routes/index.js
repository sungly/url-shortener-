// 3-rd party imports 

import mongoose from "mongoose";
import validUrl from "valid-url";
import shortId from "shortid";

const urlShortener = mongoose.model("urlShortener");

const routes = app => {
  app.get("/api/:uniqueCode", async (req, res) => {
    const uniqueCode = req.params.uniqueCode;

    const url = urlShortener.findOne({ uniqueCode })

    if ( !url ) res.send("Unable to find url");

    return res.send(url.originalUrl);
  });

  app.post("/api/shortenUrl", async (req, res) => {
    const { originalUrl, shortenBaseUrl } = req.body;

    // check if shortenBaseUrl is valid 
    if (!validUrl.url(shortenBaseUrl)) return res.status(401).json("Invalid shorten base url");

    const uniqueShortenCode = shortId.generate();
    const createdDate = Date.now();

    // check if originalUrl is valid 
    if (validUrl.url(originalUrl)) {
      // do something...
    }

  });
}

export default routes; 