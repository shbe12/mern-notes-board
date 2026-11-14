import mongoose from "mongoose";

// create a schema for the Note model
// model based off of the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createAt, updatesAt
);

const Note= mongoose.model("Note", noteSchema)

export default Note;
