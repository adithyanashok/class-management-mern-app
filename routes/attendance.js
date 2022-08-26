import express from "express";
import { createAttendance, deleteAttendance, getAttendance, updateAttendance } from "../controllers/attendance.js";

const router = express.Router()
// create Attendance
router.post('/', createAttendance)
// update Attendance
router.put('/:id', updateAttendance)
// Delete Attendance
router.delete('/:id', deleteAttendance)
// get Attendance
router.get('/', getAttendance)

export default router