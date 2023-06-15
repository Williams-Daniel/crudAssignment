const mongoose = require("mongoose")

const carDB = "mogodb://0.0.0.0:27017/CarBase"

const dataBase = async(req,res)=>{
    try {
        const db = await mongoose.connect(carDB)
        console.log("connected", db.connection.host)
    } catch (error) {
        res.status(404).json({
            message:"an error just occurred"
        })
    }
}

// mongoose.connect(dataBase)
// .then(()=>{
//     console.log("connected")
// }).catch((error)=>{
//     console.log(error)
// })


module.exports = dataBase