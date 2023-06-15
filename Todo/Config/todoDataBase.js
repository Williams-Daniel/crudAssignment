const mongoose = require("mongoose");

const TodoDb = "mongodb://0.0.0.0:27017//TodoDataBase";

const DataBase = async () => {
  try {
    const db = await mongoose.connect(TodoDb);
    console.log("connected",db.connection.host)
  } catch (error) {
    console.log("an error just occurred", error);
  }
};

// mongoose.connect(TodoDb)
// .then(()=>{
//     console.log("connected")
// }).then((error)=>{
//     console.log(error)
// })

module.exports = DataBase;
