const express = require("express")
const CandidateModel = require("../Model/electionModel")

const getallCandidate = async(req,res)=>{
    try {
        const allCandidiate = await CandidateModel.find()
        res.status(200).json({
            message:"getting all candidates",
            data:allCandidiate
        })
    } catch (error) {
        res.status(404).json({
            message:"Cannot get all candidate"
        })
    }
}

const newCandidate = async(req,res)=>{
    try {
        const {candidateName,candidateParty,candidateAge,Occupation,candidateEducation} = req.body

        const registerCandidate = CandidateModel.create({
            candidateName,
            candidateAge,
            candidateParty,
            Occupation
        })
        res.status(201).json({
            message:"registering new candidate",
            data:registerCandidate
        })
    } catch (error) {
        res.status(404).json({
            message:"Cannot  register candidate"
        })
    }
}