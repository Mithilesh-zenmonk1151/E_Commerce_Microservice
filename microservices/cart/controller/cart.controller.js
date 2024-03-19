const { cartService } = require("../services");
const CustomError= require("../utils/error")
exports.createCart = async (req, res) => {
  try {
    const response = await cartService.createCart(req);
    return res.status(201).json(response);
  } catch (error) {
    CustomError("Internal Server Error",500)
  }
};
exports.getCart= async(req,res)=>{
    try{
        const response= await cartService.getCart(req);
        res.status(200).json(response);

    }
    catch(error){
        CustomError("Internal server error", 500)

    }
}
exports.
