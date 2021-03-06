var express = require("express");
var router = express.Router();
var Publication = require("../Schemas/Publication.js");
var fs = require('fs');
var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

router.post("/createpub", upload.single('image'), function (req, res, next) {
    console.log(req.body);
    const publication = new Publication({
      title: req.body.title,
      description: req.body.description,
      picture: {
        data: "http://localhost:3001/" + 'uploads/' + req.file.filename,
        contentType: 'image/png'
    } 
    
    });
    console.log(process.cwd() + '/public/uploads/' + req.file.filename)
    publication.save(function (err, obj) {
      if (err) {
        return next(err.message);
      } else {
        res.status(200).send({ok: false, status:200});
      }
    });
  });

  router.get("/reqallpub", function (req, res, next) {
    Publication.find().exec(function (err, obj) {
      if (obj === null) {
        return res.json("NoArticles");
      } else {
        return res.json(obj);
      }
    });
  }); 

module.exports = router;