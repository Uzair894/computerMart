const mongoose = require('mongoose')
const validator = require('validator')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    prize: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    size: {
        type: String
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'image'
    },
    duration: {
        type: String,
    }
}, {
        timestamps: true
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product