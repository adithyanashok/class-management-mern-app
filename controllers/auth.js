import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import Students from "../models/students.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const createStudent = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newStudent = new Students({...req.body, password: hash})
        const savedStudents = await newStudent.save()
        res.status(200).json(savedStudents)
    }catch(err){
        next(err)
    }
}

export const studentLogin = async (req, res, next) => {
    try{
        const student = await Students.findOne({studentId: req.body.studentId})
        if(!student) return next(createError(404, "Student not found"))
        const hashedPassword = await bcrypt.compare(req.body.password, student.password)
        if(!hashedPassword) return next(createError(400, "Password Incorrect"))
        const token = jwt.sign({id: student._id}, process.env.JWT_SEC)
        const { password, ...others} = student._doc

        res.cookie("access_token", token, {
            token:token,
            httpOnly: true
        }).status(200).json(others)

    } catch(err){
        next(err)
    }
}