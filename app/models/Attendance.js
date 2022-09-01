import mongoose from "mongoose";

const AttendanceSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Attendance", AttendanceSchema);
