import { createError } from "../error.js";
import students from "../models/students.js";

// update a student
export const updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await students.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    next(createError(403, "You can't do that"));
  }
};

// delete a student

export const deleteStudent = async (req, res, next) => {
  try {
    await students.findByIdAndDelete(req.params.id);
    res.status(200).json("Student Deleted");
  } catch (err) {
    next(createError(403, "You can't do that"));
  }
};

// get a student

export const getStudent = async (req, res, next) => {
  try {
    const student = await students.find();
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
