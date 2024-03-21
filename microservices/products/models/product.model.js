const mongoose= require("mongoose");
const category= require("./category.models") 

const productSchema= new mongoose.Schema({
    uuid:{
        type: String
    },
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
    stock:{
        type:Number

    },
    images:{
        type:Array
    },
    quantity:{
        type: Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: category
    },
    status: {
        type: String,
        enum: ["Draft", "Uploaded"],
      },
    

    
},{timestamps:true})
module.exports= mongoose.model("prodduct", productSchema);