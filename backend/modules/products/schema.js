const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required:true,
    },
    img: {
        type: String,
        required: true,
        unique:true
    },
    imgDetail: {
        type: String,
    },
    
    category: {
        type: String,
        required: true,
    },
   
    gender: {
        type: String,
        required:true
    },
    rating: {
        type: Array,
    },
    inventory: {
        type: Number,
        required:true
    }
})

module.exports = productSchema