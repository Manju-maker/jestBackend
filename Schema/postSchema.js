var mongoose = require("mongoose");

var postDetails = mongoose.Schema({
    color:{type:String},
    brand:{type:String},
    photo:{type:String},
    userId:{type:String},
    userName:{type:String},

})

module.exports=mongoose.model("post",postDetails);