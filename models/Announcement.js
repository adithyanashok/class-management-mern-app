import mongoose from "mongoose";

const AnnouncementSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Announcement", AnnouncementSchema);
