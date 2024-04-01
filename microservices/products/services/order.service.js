const { sendMsg } = require("../../order/worker/producer.worker");
const productModel= require("../models");
const CustomError = require("../utils/error");
const Producer= require("../worker/producer.worker");
const producer= new Producer();
exports.createOrder= async(payload)=>{
    try{
        const userId=payload.userId;
        const {productId}= payload.productId;
    const requiredProduct= payload.quantity;
    const product= await productModel.findOne({productId});
    if(product.quantity===0){
        throw new CustomError("No Product exist",401)
    }

    const totalNumberOfProduct= product.quantity;
    if(!product){
        throw new CustomError("No product exist for this id",401)
    }
    if(requiredProduct>totalNumberOfProduct){
        throw new CustomError("Not enough stock present", 401)
    }
   
          const routingKey = "order";
          const signature = "order.order_created";
          await producer.publishMessage(routingKey,{product,userId,requiredProduct}, signature);
        
    
    }
    catch(error){
        throw error;
    }
}