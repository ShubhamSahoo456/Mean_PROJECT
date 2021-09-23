const User = require('../schema/userschema')

const Register = async (req,res)=>{
    try{
        const {name , email ,mobile ,gender , password} = req.body;

        const userEmail = await User.findOne({email:email});
        if(userEmail){
            res.status(300).json({"status":false,"message":"email already exists"})
        }else{
            const newUser = await new User({name,email,mobile,gender,password});

            const saveUser = await newUser.save();

            if(saveUser){
                res.status(200).json({"status":true,"message":"Verification code has been sent to your mail plss verify your mail id"})
            }else{
                res.status(500).json({"status":false,"message":"user not registered"})
            }
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    Register
}