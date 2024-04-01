const {mailService}= require("../services");
exports.createOtp=async(req,res)=>{
    try{
        const response= await mailService.createOtp(req);

    }
    catch(error){
        
    }
}