const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    productName:{
        type:String,
        trim:true
    },
   
    image:{
        type:String
    },
    status:{
        type:String,
        enum:["Proccessing","Delivered","Cancelled"],
        default:"Proccessing"

    },
    description:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model("order",orderSchema);