const mongoose = require("mongoose")

const studentDataBase = "mongodb://0.0.0.0:27017/set07Database"

const dataBase = async()=>{
    try {
        const db = await mongoose.connect(studentDataBase)
    console.log("connected",db.connection.host)
    } catch (error) {
        console.log("an error just occurred")
    }
}

// mongoose.connect(studentDataBase)
// .then(()=>{
//     connsole.log("connected")
// }).catch((error)=>{
//     console.log(error)
// })

module.exports =dataBase
