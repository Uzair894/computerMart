const express = require('express')
const image = require('../models/image')
const auth = require('../middleware/auth')
const router = new express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/image');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

var upload = multer({
    // dest:'images',
    storage: storage
});

router.post('/image', upload.array('image', 10) , async (req, res) =>{
    // const images = new image({
    //     fileName : req.image.filename,
    //     originalName: req.image.originalname,
    //     path: [{
    //         path:req.image.path
    //     }],
    //     destination: req.image.destination
    // })
    try {
        // await images.save(images)
        res.send(req.files);
    } catch(error) {
          console.log(error);
           res.send(400);
    }
});

router.get("/images", (req, res) => {
    image.find({}, (err, image) => {
      res.send(image);
    });
  });

router.delete('/images/:id', auth, async (req, res) => {
    try {
        const image = await image.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!image) {
            res.status(404).send()
        }

        res.send(image)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router