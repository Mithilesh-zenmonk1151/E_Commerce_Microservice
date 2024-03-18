const {authModel} = require("../models")
exports.signup=async(payload)=>{
    try{
        const { fullName,email, password,role } = payload.body;
        const message = JSON.stringify({ fullName,email, password ,role});
        await publishMessage('signup_queue', message);
        

    }
    catch(error){
        throw error

    }
}