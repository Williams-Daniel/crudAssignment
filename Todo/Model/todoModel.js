const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

const taskModel = mongoose.model("Task", taskSchema);
module.exports = taskModel;
