const categoryModel= require("../models");
exports.addCategory= async(payload)=>{
try{
    const {category, subCategory}= payload.body;
    const categoryDetails= await categoryModel.create({
        category:category,
        subCategory:subCategory
    })
    return categoryDetails

}
catch(error){
    throw error
}     
}
exports.showAllCategories= async(payload)=>{
    try{
        const allCategory= await categoryModel.find();
        return allCategory;

    }
    catch(error){
        throw error;

    }
}
exports.categoryPageDetails= async(payload)=>{
    try{
        const {categoryId}= payload.body;
        const selectedCategory= await categoryModel.findById(categoryId).populate({
            path:"product",
            match:{status:"Uploaded"}
        }).exec();
        return selectedCategory

    }
    catch(error){
        throw error;

    }
}