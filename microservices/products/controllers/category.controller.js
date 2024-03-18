const {categoryService}= require("../services");
exports.addCategory=async(req,res)=>{
   try{
    const response= await categoryService.addCategory(req);
    return res.status(201).json(response);

   }
   catch(error){
    console.log(error);
    return res.status(500).json({
        message: "Internal server error"
    })


   }
}
exports.showAllCategories=async(req,res)=>{
    try{
        const response= await categoryService.showAllCategories(req);
        return

    }
    catch(error){

    }
}