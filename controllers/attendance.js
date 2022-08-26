import Attendance from "../models/Attendance.js"

export const createAttendance = async (req, res, next) => {
    try{
        const newAttendance = new Attendance(req.body)
        const savedAttendance = await newAttendance.save()
        res.status(200).json(savedAttendance)
    }catch(err) {
        next(err)
    }
}
export const updateAttendance = async (req,res, next) => {
    try{
        const updatedAttendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
                
            },
            {
                new:true
            }
        )
        res.status(200).json(updatedAttendance)
    }catch(err){
        next(err)
    }
}
export const deleteAttendance = async (req, res, next) => {
    try{
        await Attendance.deleteOne(req.params.id)
        res.status(200).json("Attendance deleted")
    }catch(err){
        next(err)
    }
}

export const getAttendance = async (req, res, next) => {
    try{
        const attendance = await Attendance.find()
        res.status(200).json(attendance)
    }catch(err){
        next(err)
    }
}
