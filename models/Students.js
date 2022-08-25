import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:{ type: String, required: true },
    address:{ type: String, required: true },
    mobile:{ type: String, required: true },
    studentId:{ type: Number, unique: true, required: true },
    password:{ type: String, required: true },
}, {timestamps: true})
export default mongoose.model('Student', studentSchema)