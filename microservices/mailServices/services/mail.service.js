const emailModel= require("../models");
const CustomError = require("../utils/error");
const Producer= require("../worker/publisher.worker");
const producer= new Producer();


exports.createOtp= async(payload) =>{
   try{
    const {email}= payload.body;
    const isExistemail= await emailModel.findOne({email});
    if(isExistemail){
      throw new CustomError("user allready exist",409)
    }
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
      const result= await emailModel.findOne({otp:otp});
      console.log("Otp", otp);
      while(result){
        otp=otpGenerator.generate(6,{
          upperCaseAlphabets:false,
        })
      }


      const Otp= await emailModel.create({
        email:email,
        otp:otp,

      });
      const routingKey="otp"
      const signature="otp.otp_created";
      await producer.publishMessage(routingKey,Otp,signature)


      return Otp;
   }
   catch(error){
    console.log(error)
   }
}
exports.checkOtp= async(payload)=>{
    try{
        const {otp}= payload.body;
        const response = await emailModel.find({ email }).sort({ createdAt: -1 }).limit(1)
        console.log(response)
        if (response.length === 0) {
          return res.status(400).json({
            success: false,
            message: "The OTP is not valid",
          })
        } else if (otp !== response[0].otp) {
          return res.status(400).json({
            success: false,
            message: "The OTP is not valid",
          })

        }
        else if(otp == response[0].otp){
              


        }

    }
    catch(error){

    }
}