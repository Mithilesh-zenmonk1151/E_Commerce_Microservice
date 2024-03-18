const productModel= require("../models");
exports.addNewProduct=async(payload)=>{
try{
    const {productName, price, description,image,id}= payload;
     const images= image?.map((i)=>{
        return i.path;
     }) 
    const product= await productModel.create({
        productName:productName,
        price:price,
        description:description,
        images:images,
        userId:id

    })
    return product;

} 
catch(error){
    throw error

}   
}
exports.getProducts=async(payload)=>{
try{
    const {userId}= payload.params;
    console.log(userId)
    const products= await productModel.find().sort({createdAt: -1});
    return products;

}   
catch(error){
    throw error;

}  
}
exports.updateProduct= async(payload)=>{
    try{
        const {id} = payload.params;
        const {productName,price,category,images}=payload.body;
        const  update= await productModel.findByIdAndUpdate(
            id,
            {
                productName:productName,
                price:price,
                category:category,
                images:images
            },
            {new:true}
        );
        return  update;

    }
    catch(error){
        throw error
    }

}
exports.deleteProduct= async(payload)=>{
    try{
        const {id} =payload.params;
        const deleted= await productModel.findByIdAndDelete(id);
        return deleted;

    }
    catch(error){
        throw error
    }
}