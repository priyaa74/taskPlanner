const Sprint = require("../models/sprint");
const SprintTask = async (req, res) => {
  const { email, sprintTitle } = req.body;
  const sprintFind = await Sprint.findOne({ sprintTitle });
  try {
    if (!sprintFind) {
      const SprintCreate = await Sprint.create({
        email,
        sprintTitle,
        users: req._id,
      });
      res.status(201).send(SprintCreate);
    } else {
      res.send("Sprint with this title already exists!");
    }
  } catch (e) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const GetSprintTask = async (req, res) => {
  const details = await Sprint.find({ users: req._id });
  try {
    if (!details) {
      res.status(404).send("Not found");
    } else {
      res.status(200).send(details);
    }
  } catch (e) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

module.exports = { SprintTask, GetSprintTask };