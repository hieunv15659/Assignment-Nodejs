import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: Number,
    }
});

export default mongoose.model('Category', categorySchema)