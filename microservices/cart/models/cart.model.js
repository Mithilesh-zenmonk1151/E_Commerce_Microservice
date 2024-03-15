const mongoose= require("mongoose");
const cartSchema= new mongoose.Schema({
    products:{
        type:String
    }
})