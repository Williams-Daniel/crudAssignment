const express = require("express")
const carModel = require("../Model/carModel")


const getAllCarType = async(req,res)=>{
    try {
        const carTypes = await carModel.find()
        res.status(200).json({
            message:"getting all car type",
            data: carTypes
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot get all car types"
        })
    }
}

const  newCarType = async(req,res)=>{
    try {
        const {name,model,type,color} =req.body
        const createCarType = carModel.create({
            name,
            model,
            type,
            color
        })
        res.status(201).json({
            message:"creating new car type",
            data:createCarType
        })
        
    } catch (error) {
        res.status(404).json({
            message:"cannot create car type"
        })
    }
}