const {authModel} = require("../models")
const CustomError = require('../utils/error');
const bcrypt = require("bcrypt")

exports.signup=async(payload)=>{
    const {fullName, email, password} = payload;
    if(!(fullName && email && password)) throw new CustomError("User credentials not found", 422);
    const user = await authModel.findOne({email});
    if(user) throw new CustomError("email already exists", 409);

    // publish the details to the user service 
    console.log(fullName, email, password);
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const message = await sentMsg({fullName, email, password});
    } catch (error) {
        console.log("error :- ", error)
    }
    
   

    
   
    return {message : "successful trial"};
}