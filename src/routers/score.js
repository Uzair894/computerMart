const express = require('express')
const Score = require('../models/score')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/score', auth, async (req, res) => {
    //const product = new Product(req.body)
    const score = new Score({
        ...req.body,
        buyerId: req.user._id
    })

    try {
        await score.save()
        res.status(201).send(score)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/score", (req, res) => {
    Score.find({}, (err, score) => {
      res.send(score);
    });
  });

module.exports = router