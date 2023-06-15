const  express = require("express")
require("../Set07/Config/studentDataBase")

const port  = 4455

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"server  is ready!"
    })
})

app.listen(port,()=>{
    console.log("server is listening!",port)
})