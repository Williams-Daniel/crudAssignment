const express = require("epxress");
require("../Model/todoModel");

const getAllTask = async (req, res) => {
  try {
    const allTask = await taskModel.find();
    res.status(200).json({
      message: "getting all task",
      data: allTask,
    });
  } catch (error) {
    res.status(404).json({
      message: "cannot get all task",
    });
  }
};

const newTask = async (req, res) => {
  try {
    const { title, date, time, complete } = req.body;
    const createTask = {
      title,
      date,
      time,
      complete,
    };
    res.status(201).json({
      message: "creating new task",
      data: createTask,
    });
  } catch (error) {
    res.status(400).json({
      message: "cannot create task",
    });
  }
};
