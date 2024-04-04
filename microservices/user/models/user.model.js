const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({



    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum:["Admin", "Customer","Vender","DeliveryPartner"],
        default:"Customer"
        
    },
    userId:{
        type:String ,
        required: true
    },
    address:[
        {
            area: {
                type: String,
            },
            city: {
                type: String
            },
            state: {
                type: String
            },
            country: {
                type: String
            },
            pincode: {
                type: Number
            }
        }
    ],
    phone: {
        type: String
    },
    profileImage: [{
        type: String,
        default: []
    }],
    status: {
        type: String,
        enum: ["Active", "Deactive","Pending"],
        default: "Pending"
    }
   

},{timestamps:true})
module.exports = mongoose.model("user", userSchema)



