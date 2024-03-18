const { userService } = require("../services");
exports.register = async (req, res) => {
  try {
    const response = await userService.register(req);
    console.log(response);
    return res.status(200).json({
      message: "Signup successfull",
      user: response.user,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.login = async (req, res) => {
  console.log("respomnse login controller");
  try {
    console.log("user login");
    const response = await userService.login(req, res);
    console.log("response", response);
    if (response.status === 400) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
  } catch (error) {
    if (error.message === "Invalid user") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "Invalid password") {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }
};
