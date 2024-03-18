const {authModel} = require("../models")
exports.signup=async(payload)=>{
    try{
        const { fullName,email, password } = payload.body;
        
        
        const message = JSON.stringify({ fullName,email, password });
        await publishMessage('signup_queue', message);
        

    }
    catch(error){
        throw error

    }
}