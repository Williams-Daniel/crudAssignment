const express = require("express")
require("../Car/Config/carDataBase")

const port = 5566

const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"server is up and running"
    })
})


app.listen(port,()=>{
    console.log("server is listening!")
})