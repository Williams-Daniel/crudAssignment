const mongoose = require("mongoose")

const electionDataBase = "mongodb://0.0.0.0:27017/electionDataBase"


const EDataBase = async()=>{
    try {
       const db = await mongoose.connect(electionDataBase)
    console.log("connected",db.connection.host)
    } catch (error) {
        console.log("an error just occurred")
    }
}


// mongoose.connect(electionDataBase)
// .then(()=>{
//     console.log("connected")
// }).then((error)=>{
//     console.log(error)
// })

module.exports = EDataBase