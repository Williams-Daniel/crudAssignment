//Blogname,Category,topic,

const mongoose = require("mongoose")


const BlogSchema = mongoose.Schema({
    blogName:{
        type:String
    },
    category:{
        type:String
    },
    topic:{
        type:String
    },
    view:{
        type:number
    }
})

const blogModel = mongoose.model("myBlog",BlogSchema)

module.exports = blogModel