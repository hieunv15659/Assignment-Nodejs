import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    originalPrice: {
        type: Number,
    },
    image: {
        type: String,
    },
    saleOffPrice: {
        type: String,
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    },
    feature: {
        type: String,
    },
    longDesc: {
        type: String,
    },
    shortDesc: {
        type: String,
    },

});

export default mongoose.model('Product', productSchema)