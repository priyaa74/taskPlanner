require("dotenv").config();
const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    const verification = jwt.verify(token, SECRET);
    try {
      if (verification) {
        req._id = verification.id;
        next();
      } else {
        res.send("Access denied");
      }
    } catch (e) {
      return res.send(e.message);
    }
  } else {
    return res.send("Access denied");
  }
};

module.exports = isAuth;