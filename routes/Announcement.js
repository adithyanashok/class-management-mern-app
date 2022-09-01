import express from "express";
import { createAnnouncement, deleteAnnouncement, getAnnouncement, updateAnnouncement } from "../controllers/Announcement.js";
import { verifyTeacher, verifyToken } from "../verifytoken.js";

const router = express.Router()
// create Announcement
router.post('/', verifyTeacher, createAnnouncement)
// update Announcement
router.put('/:id', verifyTeacher, updateAnnouncement)
// Delete Announcement
router.delete('/:id', verifyTeacher, deleteAnnouncement)
// get Announcement
router.get('/', verifyToken, getAnnouncement)

export default router