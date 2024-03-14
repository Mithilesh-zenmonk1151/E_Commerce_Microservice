const mongoose= require("mongoose");

const productSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    productName:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type: String
    },

    
},{timestamps:true})
module.exports= mongoose.model("prodducts", productSchema);