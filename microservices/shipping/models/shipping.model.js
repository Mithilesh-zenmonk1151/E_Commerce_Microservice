const mongoose= require("mongoose");
const shippingSchema= new mongoose.Schema({
    orderId:{
        type:String,
        ref:"order"
    },
    userId:{
        type: String,
        ref:"user"
        
    },
    ArrivingBy:{
        type: Date,

    },
    shippingStatus:{
        type:String,
        enum:["packed","picked","orderPlaced"],
        default:"packed"
    },
    pointsName:{
        type: Array
    },
    currentPointName:{
        type: String

    }
},{timestamps:true})
module.exports= mongoose.model("shipping", shippingSchema); 