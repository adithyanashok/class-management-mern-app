import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// check that a student authenticated or not
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("token", token);
  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  jwt.verify(token, process.env.JWT_SEC, (err, student) => {
    if (err) return next(createError(403, "Token not valid"));
    req.student = student;
    next();
  });
};

export const verifyStudent = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.student.id === req.params.id || req.student.teacher) {
      next();
    } else {
      next(createError(401, "You are not authenticated student"));
    }
  });
};
// check that there is teacher

export const verifyTeacher = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.student.teacher) {
      next();
    } else {
      if (err) createError(401, "You are not authenticated teacher");
    }
  });
};
