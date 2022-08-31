import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/students.js";
import timetableRoutes from "./routes/timetable.js";
import eventRoutes from "./routes/events.js";
import stripeRoutes from "./routes/stripe.js";
import noteRoutes from "./routes/Note.js";
import AttendanceRoutes from "./routes/attendance.js";
import AnnouncementRoutes from "./routes/Announcement.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/attendance", AttendanceRoutes);
app.use("/api/announcement", AnnouncementRoutes);
app.use("/api/checkout", stripeRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
const connect = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to DB");
  });
};

app.listen(8800, () => {
  console.log("Server Connected");
  connect();
});
