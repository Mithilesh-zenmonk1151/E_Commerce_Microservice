const mongoose= require("mongoose");

const authSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required:true,
        trim: true
    },
    role:{
        type:String,
        enum:["Admin","Customer","Vender","DeliveryManager"],
        default: "Customer"
    },
    otp:{
        type:String,
        trim:true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "_id",
      },
    status: {
        type: String,
        enum: ["Active", "Deactive","Pending"],
        default: "Pending"
    }
},{timestamps:true})
module.exports= mongoose.model("auth",authSchema);