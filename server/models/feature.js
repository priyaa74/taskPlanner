const { Schema, model } = require("mongoose");

const featureSchema = Schema(
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

const Feature = model("Feature", featureSchema);
module.exports = Feature;