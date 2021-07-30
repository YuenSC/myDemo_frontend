global.fetch = require("node-fetch");
const Unsplash = require("unsplash-js");
const config = require("universal-config");
const express = require("express");

// Refer to https://github.com/unsplash/unsplash-js and https://unsplash.com/documentation
const unsplash = Unsplash.createApi({
  accessKey: config.get("ACCESS_KEY"),
});

const app = express();

// The pu
app.get("/api/photos", (req, res) => {
  console.log("Send request to get photos from unsplash");
  const { query, page, perPage } = req.query;
  unsplash.search
    .getPhotos({ query: query, page: page, perPage: perPage })
    .then((result) => {
      switch (result.type) {
        case "error":
          console.log("error occurred: ", result.errors[0]);
          res.status(400).send("The required image is not found");
          break;
        case "success":
          console.log("Request succeed");
          const photos = result.response;
          res.status(200).json(photos);
      }
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
