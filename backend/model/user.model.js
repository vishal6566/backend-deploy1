const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    
    age:{type:String,min: 20, max: 100},
    gender:{type:String}
},{
    timestamps:true,  versionKey:false
})
const User=mongoose.model("user",userSchema)

module.exports=User