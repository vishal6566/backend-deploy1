const express=require("express")
const dotenv=require("dotenv").config()
const cors = require("cors")
const connect=require("./config/db")
const userRoute=require("./routes/users.route")
const app=express()

app.use(express.json())
app.use(cors({
    origin : "*"
}))
app.use("/users",userRoute)
const PORT= process.env.PORT||8000
app.get("/",(req,res)=>{
    res.send("hi")
})


app.listen(PORT,async()=>{
    await connect()
    console.log(`http://localhost:${PORT}`)
})