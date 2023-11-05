const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", `${__dirname}/views`); // sets dir of views
app.set("view engine", "pug"); // sets pug as view eng

app.use(express.static("public")); // sets static asset dir
app.use(morgan("common")); // sets morgan for logs

// routes
app.get("/", (req, res, next) => {
  res.render("layout", {
    /* variables */
  });
});

// simple error handling middleware
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});
