import express from "express";
import {
  deleteStudent,
  getStudent,
  updateStudent,
} from "../controllers/students.js";
import { verifyTeacher } from "../verifytoken.js";

const router = express.Router();
// update a student
router.put("/:id", verifyTeacher, updateStudent);
// Delete a student
router.delete("/:id", verifyTeacher, deleteStudent);
// get a user
router.get("/", getStudent);

export default router;
