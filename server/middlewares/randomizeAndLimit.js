const mung = require("express-mung");
const lodash = require("lodash");

function randomizeAndLimit(body, req, res) {
  return lodash.sampleSize(body, 10);
}

module.exports = mung.json(randomizeAndLimit);
