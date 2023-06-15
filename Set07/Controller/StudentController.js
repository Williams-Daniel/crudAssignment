const express = require("express")
const studentModel = require("../Model/studentModel")

const getAllStudent = async(req,res)=>{
    try {
        const allStudent = studentModel.find()
        res.status(200).json({
            message:"getting all students",
            data:allStudent
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot get all student"
        })
    }
}

const newStudent = async (req,res)=>{
try {
    const {name,DateOfBirth,StateOfOrigin,gender,Address,PhoneNumber} = req.body
    const registerNewStudent = mongoose.create({
        name,
        DateOfBirth,
        StateOfOrigin,
        gender,
        Address,
        PhoneNumber
    })
    res.status(201).json({
        message:"registering new student",
        data:registerNewStudent
    })

} catch (error) {
    res.status(404).json({
        message:"cannot register new student"
    })
}
} 