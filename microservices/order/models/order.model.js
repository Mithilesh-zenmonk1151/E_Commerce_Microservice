const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    productName:{
        type:String,
        trim:true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   
    image:{
        type:String
    },
    status:{
        type:String,
        enum:["Proccessing","Delivered","Cancelled","Refund"],
        default:"Proccessing"

    },
    description:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model("order",orderSchema);