const express = require("express")
const blogModel = require("../Model/blogModel")



const getAllBlogs = async(req,res)=>{
    try {
        const allBlogs = await blogModel.find()
        res.status(200).json({
            message:"getting all blogs",
            data:allBlogs
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot get all blogs"
        })
    }
}


const newBlogs = async(req,res)=>{
    try {
        const {blogName,category,topic,view} = req.body
        const createNewBlogs = await blogModel.create({
            blogName,
            category,
            topic,
            view
        })
        res.status(201).json({
            message:"creating new blog",
            data:createNewBlogs
        })
    } catch (error) {
        res.status(404).json({
            message:"cannot create new blog"
        })
    }
}