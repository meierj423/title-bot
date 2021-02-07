require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

console.log("API KEY: ", process.env.REACT_APP_OPENGRAPH_API_KEY);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add custom routes
app.use(routes);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
