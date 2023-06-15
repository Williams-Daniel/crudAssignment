const mongoose = require("mongoose")


const candidateSchema = mongoose.Schema({
    candidateName:{
        type:String
    },
    candidateParty:{
        type: String
    },
    candidateAge:{
        type:String
    },
    Occupation:{
        type:String
    },
    candidateEducation:{
        type:String
    },
    
})

const CandidateModel = mongoose.model("Election",candidateSchema)

module.exports = CandidateModel