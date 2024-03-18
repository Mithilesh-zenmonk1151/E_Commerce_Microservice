const CustomError = require("../../user/utils/error");
const rattingAndReviewModel= require("../models");
const productModel= require("../models")
exports.addRattingAndReview=async(payload)=>{
   try{
    const productId= payload.params;
    const {ratting, review,userId}=payload.body
    const isProduct= await productModel.findById(productId);
    if(!isProduct){
        throw  new CustomError("No such product  exist",404);

    }
    const newRattingAndReview= await rattingAndReviewModel.create({
        userId:userId,
        productId:productId,
        ratting:ratting,
        review:review
    }) 
    return newRattingAndReview
   }
   catch(error){
   throw error
   }
}
exports.getRattingAndReview= async(payload)=>{
    try{
        const {productId}= payload.params;
        const rattingAndReview=  await rattingAndReviewModel.find({productId})
        return rattingAndReview;
    }
    catch(error){
        throw error
    }
}
exports.editRattingAndReview= async(payload)=>{
try{
    const {rattingAndReviewId}=payload.params;
     const {ratting,review}= payload.body;
     const updatedRattingAndReview=  await  rattingAndReviewModel.rattingAndReviewModel.findByIdAndUpdate(rattingAndReviewId,
        {ratting:ratting,
        review:review},
        {new:true})
return updatedRattingAndReview;

}   
catch(error){
    throw error
} 
}
exports.deleteRattingAndReview= async(payload)=>{
    try{
        const {rattingAndReviewId}=payload.params;
    const deleteRattingAndReview= await rattingAndReviewModel.rattingAndReviewModel.findByIdAndDelete(rattingAndReviewId);
    return deleteRattingAndReview
    }
    catch(error){
        throw error;

    }
}