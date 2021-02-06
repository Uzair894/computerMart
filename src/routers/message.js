const express = require("express");
const Message = require("../models/message");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/messages", auth, async (req, res) => {
  const message = new Message({
    ...req.body,
    senderId: req.user._id,
  });
  try {
    await message.save();
    res.status(201).send(message);
  } catch (e) {
    res.status(400).send({ e, message: e });
  }
});

router.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

module.exports = router;
