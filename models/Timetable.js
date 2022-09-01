import mongoose from "mongoose";

const timetableSchema = mongoose.Schema(
  {
    timetable: [
      {
        day: { type: String },
        FirP: { type: String },
        SecP: { type: String },
        ThirP: { type: String },
        ForP: { type: String },
        FifP: { type: String },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Timetable", timetableSchema);
