const {productService}= require("../services");
exports.addNewProduct=async(req,res)=>{
    try{
        const response = await productService.addNewProduct(req);
        return res.status(201).json(response);

    }
    catch(error){
        

    }
}