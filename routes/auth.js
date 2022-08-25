import express from "express";
import { createStudent, studentLogin } from "../controllers/auth.js";

const router = express.Router()

router.post('/createstudent', createStudent)
router.post('/studentlogin', studentLogin)

export default router