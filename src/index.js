const express = require('express')
require('./db/mongoose')
const multer = require('multer')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const messageRouter = require('./routers/message')
const chatRouter = require('./routers/chatbox')
const imageRouter = require('./routers/image')
const complainRouter = require('./routers/complain')
const scoreRouter = require('./routers/score')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(messageRouter)
app.use(chatRouter)
app.use(complainRouter)
app.use(imageRouter)
app.use(scoreRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
