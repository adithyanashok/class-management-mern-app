import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'
import cors from 'cors'

 const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    })

})
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to DB")
    })
}
 app.listen(8800, () => {
    console.log("Server Connected")
    connect()
 })