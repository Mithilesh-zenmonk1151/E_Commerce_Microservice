const { authModel } = require("../models");
const customError = require("../utils");
const {consumerRabbitMq}= require("../rabbitMq")
exports.register = async (payload) => {
  try {
    const { fullName, email, password } = payload.body;
    const isExistUser = await authModel.findOne({ email });
    if (isExistUser) {
      throw new errorHandler("User all ready exist", 409);
    }
    const user = authModel.create({
      fullName,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
exports.login = async (payload) => {
  try {
    const { email, password } = payload.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
    const user = await authModel.findOne({ email });

    if (!user) {
      throw new customError("Invalid user", 401);
    }
    // const isCorrectPassword = compareSync(password, auths.password);
    if (password !== user.password) {
      throw new customError("Invalid password", 401);
    } else {
      return { user };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updateUserProfile = async (payload) => {
  try {
    console.log(payload.params);
    const { id } = payload.params;
    const { fullName, email } = payload.body;

    const user = await authModel.findByIdAndUpdate(
      id,
      {
        fullName: fullName,
        email: email,
      },
      { new: true }
    );
    await user.save();
    const updatedUser = await authModel.findById(id);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
