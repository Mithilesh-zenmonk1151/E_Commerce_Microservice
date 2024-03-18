const mongoose= require("mongoose");
const cartSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    products:{
        type:Array
    },
   quantity:{
        type: String
    },
    totalPrice:{
        type: Number
    },
     
},{timestamps:true})
module.exports= mongoose.model("cart",cartSchema)