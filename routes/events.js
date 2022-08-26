import express from "express";
import { createEvent, deleteEvent, getAEvents, getEvents, updateEvent } from "../controllers/events.js";

const router = express.Router()
// create Event
router.post('/', createEvent)
// update event
router.put('/:id', updateEvent)
// Delete event
router.delete('/:id', deleteEvent)
// get all event
router.get('/', getEvents)
// get one event
router.get('/find/:id', getAEvents)


export default router