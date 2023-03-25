const jwt = require("jsonwebtoken");

const authToken = (id) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: "28d",
  });
};

module.exports = authToken;