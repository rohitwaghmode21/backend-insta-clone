const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name:{
        type:String,
        minlength: 3,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    likes:Number,
    image: {
       url:String,
       filename:String
    },
    date:String,
})

const PostData=mongoose.model("instaClonepost",PostSchema);
module.exports=PostData;