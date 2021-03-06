var express = require("express");
var router = express.Router();
var postApi = require('../Api/postApi');
var multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });
  
router.post("/uploadImage",upload.single("photo"),(req,res)=>{
    console.log("file>>",req.file)
    console.log("body>>",req.body)
})

module.exports= router;