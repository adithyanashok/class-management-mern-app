import mongoose from "mongoose";

const AttendanceSchema = mongoose.Schema({
    studentId: {type: String},
    name:{ type: String, required: true },
}, {timestamps: true})
export default mongoose.model('Attendance', AttendanceSchema)