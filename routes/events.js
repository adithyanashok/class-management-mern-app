import express from "express";
import {
  createEvent,
  deleteEvent,
  getAEvents,
  getEvents,
  updateEvent,
} from "../controllers/events.js";
import { verifyTeacher } from "../verifytoken.js";

const router = express.Router();
// create Event
router.post("/", verifyTeacher, createEvent);
// update event
router.put("/:id", verifyTeacher, updateEvent);
// Delete event
router.delete("/:id", verifyTeacher, deleteEvent);
// get all event
router.get("/", getEvents);
// get one event
router.get("/find/:id", getAEvents);

export default router;
