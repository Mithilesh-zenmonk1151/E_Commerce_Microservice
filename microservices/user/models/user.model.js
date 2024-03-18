const mongoose= require("mongoose")
<<<<<<< HEAD
const userSchema= new mongoose.Schema({
=======
const authSchema= new mongoose.Schema({
>>>>>>> 54a239f95d688b78b0c589626a5e8f8d556b68ee

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
<<<<<<< HEAD
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
module.exports = mongoose.model("auth", userSchema)
=======
    address:[
        
    ]

},{timestamps:true})
module.exports = mongoose.model("auth", authSchema)
>>>>>>> 54a239f95d688b78b0c589626a5e8f8d556b68ee
