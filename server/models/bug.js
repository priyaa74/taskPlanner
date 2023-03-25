const { Schema, model } = require("mongoose");

const BugSchema = Schema(
  {
    Title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Bug = model("Bug", BugSchema);
module.exports = Bug;