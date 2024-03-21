const {authService}= require("../services");
const CustomError= require("../utils/error");
exports.register=async(req,res)=>{
    try{
        
        const user = await authService.register(req);
        res.status(201).json(user)

    }
    catch(error){
        console.log(error);
        CustomError("Internal server error",500);


    }

}