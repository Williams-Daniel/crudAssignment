const mongoose =require("mongoose")

const carSchema = mongoose.Schema({
    name:{
        type:String
    },
    model:{
        type:String
    },
    type:{
        type:String
    },
    color:{
        type:String
    }
})

const carModel = mongoose.model("Cars",carSchema)
module.exports = carModel