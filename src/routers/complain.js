const express = require("express");
const Complain = require("../models/complain");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/complain", auth, async (req, res) => {
  const complain = new Complain({
    ...req.body,
    complainerId: req.user._id,
  });
  try {
    await complain.save();
    res.status(201).send(complain);
  } catch (e) {
    res.status(400).send({ e, message: e });
  }
});

router.get("/complain", (req, res) => {
  Complain.find({}, (err, complain) => {
    res.send(complain);
  });
});

module.exports = router;
