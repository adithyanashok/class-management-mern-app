import mongoose from "mongoose";

const EventsSchema = mongoose.Schema({
    name:{ type: String, required: true },
    desc:{ type: String, required: true },
    img:{ type: String, required: true },
    price:{ type: Number, required: true },
}, {timestamps: true})
export default mongoose.model('Events', EventsSchema)