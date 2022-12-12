require('dotenv').config()
//console.log(process.env.secret)
const express = require("express");
const app=express();
const bodyParser=require("body-parser");
const postRoutes=require("./routes/Post");
const cors = require("cors") 
app.use(cors()) ;
const multer = require("multer");
const path = require("path");
const mongoose=require("mongoose");
//mongoose.connect('mongodb+srv://Bharathsai:BharathSai@cluster0.3u7uj8b.mongodb.net/?retryWrites=true&w=majority');
//Connecting Datbase Online
main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
      "mongodb+srv://nitwrohit12345:Rohit12345@cluster0.hf7pvzy.mongodb.net/stackproject?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  }


app.get("/",(req,res)=>{
    res.send("ok");
})

//middlware
app.use(bodyParser())
app.use("/post",postRoutes);


//let port = 8080||process.env.port';
const port = process.env.PORT || 8080;
app.listen(`${port}`,()=>{
    console.log("server listening on port 8080")
})