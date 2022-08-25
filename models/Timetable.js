import mongoose from "mongoose";

const timetableSchema = mongoose.Schema({
    subjects:{ type: String, required: true },
}, {timestamps: true})
export default mongoose.model('Timetable', timetableSchema)