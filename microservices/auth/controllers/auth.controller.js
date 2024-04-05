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
    console.log("Login routeefegf")
    const response = await userService.login(req, res);
    if (response.status === 400) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
  } catch (error) {
    if (error.name === "INVALIDUSER") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
    if (error.name === "INVALIDPASSWORD") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }
};