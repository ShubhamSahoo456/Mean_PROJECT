const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:false
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

//middleware function for password bcrypt
userSchema.pre("save",async function(next){
    try{
        if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password,12);
            next()
        }else{
            next()
        }
    }catch(error){
        console.log(error)
    }
})



const User = new mongoose.model("User",userSchema);

module.exports = User