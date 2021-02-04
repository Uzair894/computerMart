const mongoose = require('mongoose')
const validator = require('validator')

const scoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        default: 0
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
})

const Score = mongoose.model('score', scoreSchema)

module.exports = Score