var express = require("express");
var router = express.Router();
var userApi = require("../Api/userApi")

router.post("/register", async function(req,res){
    console.log("req.body>>",req.body)
    try{
        var result = await userApi.Register(req.body);
        res.send(result)
    }
    catch{
        console.log(err)
    }
});

router.post("/login", async function(req,res){
    try{
        var result = await userApi.Login(req.body);
        console.log("result",result)
        res.send(result)
    }
    catch{
        console.log(err)
    } 
})

module.exports=router;