const express = require("express");
const Chat = require("../models/chatbox");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/chat", auth, async (req, res) => {
  console.warn("RESPONSE..", req.body, "...", req.user._id);
  Chat.find(
    {
      $or: [
        { user1: req.user._id, user2: req.body.user2 },
        { user2: req.user._id, user1: req.body.user2 },
      ],
    },
    async (err, chat) => {
      if (chat.length > 0) {
        console.log("FOUND", chat.length);
      } else {
        const chat = new Chat({
          ...req.body,
          user1: req.user._id,
        });
        try {
          await chat.save();
          res.status(201).send(chat);
        } catch (e) {
          res.status(400).send({ e, message: e });
        }
      }
    }
  );
});

router.get("/chat", auth, async (req, res) => {
  Chat.find({}, (err, chat) => {
    res.send(chat);
  });
});

module.exports = router;
