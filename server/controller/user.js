const argon2 = require("argon2");
const User = require("../models/user");
const authToken = require("../config/auth");

const SignUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  const hash = await argon2.hash(password);
  try {
    if (user) {
      res.status(400).send("User Already Exist");
    }
    const finduser = await User.create({ name, email, password: hash });
    res.status(201).send(finduser);
  } catch (e) {
    return res.status(400).json({ message: "Please try again!" });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user && (await argon2.verify(user.password, password))) {
      return res.status(201).send({
        _id: user._id,
        email: user.email,
        token: authToken(user._id),
      });
    }
    return res.status(401).send("user doesn't exist!");
  } catch (e) {
    return res.status(400).json({ message: "Please try again!" });
  }
};
module.exports = { SignUpUser, LoginUser };
