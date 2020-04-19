const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const userRouter = require("./Router/userRouter");
const postRouter = require("./Router/postRouter");



app.use(express.static("./uploads"));
app.use(
    cors({
        allowedHeaders: ["Content-Type", "Authorization", "Content-Disposition"]
    })
);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/MSH",{useNewUrlParser:true});

app.use('/',userRouter);
app.use('/timeline/',postRouter);

const server = app.listen(8080,function(){
    const port = server.address().port;
    console.log("your server is running at ",port)
})