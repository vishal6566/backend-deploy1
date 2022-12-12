

const express = require("express")

const User = require("../model/user.model")

const usersRouter = express.Router();


usersRouter.get("/", async (req, res) => {
    const users = await User.find()
    res.send(users)
})

usersRouter.post("/create", async (req, res) => {
    const payload = req.body
   
    try{
        const new_user = new User(payload)
        await new_user.save()
        res.send({"msg" : "User created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

usersRouter.patch("/update/:userID", async (req, res) => {
        const userID = req.params.userID
        
        
       
        
            await User.findByIdAndUpdate( userID,{...req.body},{new:true})
            res.send({"msg" : "user updated successfully"})
        
})

usersRouter.delete("/delete/:userID", async (req, res) => {
    try{
        const userID = req.params.userID
        let user=await User.findByIdAndDelete(userID)
        if(user){
            res.send("Deleted sucessfully")
        }else{
            res.send("user not found")
        }
    }
   
    catch(e){
        res.send(e.message)
    }
    
})


module.exports = usersRouter


