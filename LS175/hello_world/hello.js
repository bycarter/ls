const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static("public")); // sets static assets folder
app.use(morgan("common")); //

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/", (req, res) => {
  res.render("hello-world-english");
});
app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    currentPath: req.path,
    language: "en-US",
  });
});
app.get("/french", (req, res) => {
  res.render("hello-world-french", {
    currentPath: req.path,
    language: "fr-FR",
  });
});
app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    currentPath: req.path,
    language: "sr-Cyrl-rs",
  });
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000.");
});
