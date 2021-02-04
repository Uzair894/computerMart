const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    originalName: {
        type: String
    },
    path: [{
        path: {
        type: String,
        required: true
    }
    }],
    destination:{
        type: String
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
}, {
    timestamps: true
})

imageSchema.virtual('product', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'productId'
})

const image = mongoose.model('image', imageSchema)

module.exports = image