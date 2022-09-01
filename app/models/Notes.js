import mongoose from "mongoose";

const NotesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    file: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Notes", NotesSchema);
