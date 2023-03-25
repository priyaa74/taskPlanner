const { Schema, model } = require("mongoose");

const storySchema = Schema(
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

const Story = model("Story", storySchema);
module.exports = Story;