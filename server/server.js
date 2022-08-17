// Load data from data/questions.json, select 10 questions randomly and serve from an endpoint for the api the web-app.
// Each request to the endpoint should get a new random set.

const express = require("express");
const fs = require("fs");
const path = require("path");
const randomizeAndLimit = require("./middlewares/randomizeAndLimit");

const app = express();
const port = process.env.PORT || 3001;

app.use("/api/questions", randomizeAndLimit);
app.get("/api/questions", (req, res) => {
  const raw = fs.readFileSync(path.resolve(__dirname, "data/questions.json"));
  const questions = JSON.parse(raw).results;
  res.send(questions);
});

app.listen(port);
