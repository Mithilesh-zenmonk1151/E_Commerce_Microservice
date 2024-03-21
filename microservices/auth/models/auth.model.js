const mongoose= require("mongoose");

const authSchema= new mongoose.Schema({
    fullName:{
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
    status: {
        type: String,
        enum: ["Active", "Deactive","Pending"],
        default: "Pending"
    }
},{timestamps:true})
module.exports= mongoose.model("auth",authSchema);