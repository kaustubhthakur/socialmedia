const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    votes:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: [],
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
},{
    timestamps:true
})
module.exports = mongoose.model("Post",PostSchema);