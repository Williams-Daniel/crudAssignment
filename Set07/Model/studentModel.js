const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:{
        type:String
    },
    DateOfBirth:{
        type:String
    },
    StateOfOrigin:{
        type:String
    },
    gender:{
        type:String
    },
    Address:{
        type:String
    },
    PhoneNumber:{
        type:String
    }
})

const studentModel = mongoose.model("set07",studentSchema)
module.exports = studentModel