var mongoose = require("mongoose");

var userDetails = mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String, unique:true},
    role:{type:String},
    password:{type:String},
})
module.exports= mongoose.model("user",userDetails);
