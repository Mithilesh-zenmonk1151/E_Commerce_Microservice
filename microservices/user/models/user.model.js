const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({



    fullName:{
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
   

},{timestamps:true})
module.exports = mongoose.model("user", userSchema)



