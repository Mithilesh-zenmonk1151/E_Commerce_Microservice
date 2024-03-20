const { userModel } = require("../models");
const customError = require("../utils");
const {sendMsg}= require("../worker/publisher.rabbit")
const consumeMessage = require("../worker/consumer.worker");
exports.register = async (payload) => {
  try {
    // const { fullName, email, password } = consumeMessage("sinup_queue",message)

    const isExistUser = await userModel.findOne({ email });
    if (isExistUser) {
      throw new errorHandler("User all ready exist", 409);
    }
    const message= consumeMessage({exchangeName:"Auth",message})
    const user = await new userModel({
      fullName,
      email,
      password,
      role,
      status: "Active"
    });
    user.save();
    await sendMsg(
      process.env.RABBIT_PUBLISH_USER_DETAILS, 
      process.env.RABBIT_PUB_USER_DETAILS_SIGN,
      user
      )
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
    const user = await userModel.findOne({ email });

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

    const user = await userModel.findByIdAndUpdate(
      id,
      {
        fullName: fullName,
        email: email,
      },
      { new: true }
    );

    const updatedUser = await userModel.findById(id);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};
exports.deleteUser = async (payload) => {
  try {
    const userId = payload.params;
    const deletedUser = await userModel.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
