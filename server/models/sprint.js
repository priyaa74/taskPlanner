const { Schema, model } = require("mongoose");

const sprintSchema = Schema(
  {
    email: { type: String, required: true },
    sprintTitle: { type: String, required: true },
    bug: { type: Schema.Types.ObjectId, ref: "Bug" },
    feature: { type: Schema.Types.ObjectId, ref: "Feature" },
    story: { type: Schema.Types.ObjectId, ref: "Story" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },

  {
    timestamps: true,
  }
);

const Sprint = model("Sprint", sprintSchema);
module.exports = Sprint;