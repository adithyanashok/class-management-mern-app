import express from "express";
import {
  createNote,
  deleteNote,
  getANotes,
  getNotes,
  updateNote,
} from "../controllers/notes.js";
import { verifyTeacher } from "../verifytoken.js";

const router = express.Router();
// create Notes
router.post("/", verifyTeacher, createNote);
// update Notes
router.put("/:id", verifyTeacher, updateNote);
// Delete Notes
router.delete("/:id", verifyTeacher, deleteNote);
// get all Notes
router.get("/", getNotes);
// get one Notes
router.get("/find/:id", getANotes);

export default router;
