const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({
    txt: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Chat'
    }
}, {
    timestamps: true
})

messageSchema.virtual('chat', {
    ref: 'Chat',
    localField: '_id',
    foreignField: 'chatid'
})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message