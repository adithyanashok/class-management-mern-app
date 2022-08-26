import express from "express";
import { updateStudent } from "../controllers/students.js";
import { createTimetable, deleteTimetable, getTimetable, updateTimetable } from "../controllers/timetable.js";

const router = express.Router()

// Create timetable
router.post('/', createTimetable)
// update timetable
router.put('/:id', updateTimetable)
// Delete timetable
router.delete('/:id', deleteTimetable)
// get Timetable
router.get('/', getTimetable)
export default router