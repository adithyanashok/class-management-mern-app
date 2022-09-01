import express from "express";
import {
  createAttendance,
  deleteAttendance,
  getAttendance,
  updateAttendance,
} from "../controllers/attendance.js";
import { verifyTeacher, verifyToken } from "../verifytoken";

const router = express.Router();
// create Attendance
router.post("/", verifyToken, createAttendance);
// update Attendance
router.put("/:id", verifyToken, updateAttendance);
// Delete Attendance
router.delete("/:id", verifyTeacher, deleteAttendance);
// get Attendance
router.get("/", verifyToken, getAttendance);

export default router;
