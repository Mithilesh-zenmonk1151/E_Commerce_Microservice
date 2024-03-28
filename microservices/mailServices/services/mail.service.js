const emailModel= require("../models");

exports.createOtp= async(payload) =>{
   try{
    const {email}= payload.body;
    const isExistemail= await emailModel.findOne({email});
    const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
      const Otp= await emailModel.create({
        email:email,
        otp:otp,

      })
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

    }
    catch(error){

    }
}