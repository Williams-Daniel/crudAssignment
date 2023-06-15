const mongoose = require("mongoose")


const BlogDBase = "mongodb://127.0.0.0:27017/Set07Database"

const dataBase = async()=>{
    try {
        const db = await mongoose.connect(BlogDBase)
        console.log("connected",db.connection.host)
    } catch (error) {
        console.log("an error just occurred here!",error)
    }
}

// mongoose.connect(BlogDBase)
// .then(()=>{
//     console.log("connected")
// }).catch((error)=>{
//     console.log(error)
// })

module.exports = dataBase