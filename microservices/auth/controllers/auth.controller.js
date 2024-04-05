const { authService } = require("../services");
const CustomError = require("../utils/error");
exports.register = async (req, res) => {
  try {
    const response = await authService.register(req);
    return res.status(200).json({
      message: "Signup successfull",
      user: response,
    });
  } catch (error) {
    console.log(error);
    if(error.code===400){
        console.log("password and confirm password do not matched")
    }
  }
};

exports.login = async (req, res) => {
  try {
    console.log("Inside controlller login")
    const user = await authService.login({data : req?.body});
    res.status(200).json({user, message: "user loggedin successfully"});
  }
  catch(error) {
    res.status(error?.code).json({message : error?.message});
  }
}