const mongoose = require('mongoose')
const validator = require('validator')

const complainSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    complainerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    }
},{
    timestamps: true
})

const Complain = mongoose.model('Complain', complainSchema)

module.exports = Complain