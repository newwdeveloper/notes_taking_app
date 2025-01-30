import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    titleName: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
    content: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
    },
  },
  { timestamps: true }
);

const notes = mongoose.model("notes", noteSchema);
export default notes;
