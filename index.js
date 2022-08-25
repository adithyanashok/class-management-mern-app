import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
 const app = express()
dotenv.config()


const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to DB")
    })
}
 app.listen(8800, () => {
    console.log("Server Connected")
    connect()
 })