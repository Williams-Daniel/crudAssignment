const express = require("express")
const electionDataBase = require("../Election/Config/electionDataBase")

const port = 6688

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    try {
        res.status(200).json({
            massage:"server is listening",
        })
    } catch (error) {
        console.log(error)
    }
})


app.listen(port,()=>{
    console.log("server is ready to go")
})