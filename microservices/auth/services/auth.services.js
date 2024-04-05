const { authModel } = require("../models");
const { emailModel } = require("../models");
const CustomError = require("../utils/error");
const cookie = require("cookie-parser");
const Producer = require("../work/producer.work");
const producer = new Producer();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.storeOtp = async (payload) => {
  const email = await payload.email;
  const otp = await payload.otp;
  const Otp = new emailModel({
    email: email,
    otp: otp,
  });
  await Otp.save();
};
exports.register = async (payload) => {
  console.log("auth return from user  payload", payload);
  const { name, email, password, role, confirmPassword } = payload.body;
  // if (!(fullName && email && password && role))
  //   throw new CustomError("User credentials not found", 422);
  const user = await authModel.findOne({ email });
  if (user) {
    throw new CustomError("email already exists", 409);
  }
  if (password !== confirmPassword) {
    throw CustomError("Password and confirmpassword do not matched", 400);
  }
  console.log(name, email, password, role);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(
      "services form data",
      name,
      email,
      password,
      role,
      confirmPassword
    );
    // const user = await new authModel({
    //   name: name,
    //   email: email,
    //   password: hashedPassword,
    //   role: role,
    // });
    // const routingKey = "auth";
    // const signature = "auth.auth_created";
    // await producer.publishMessage(routingKey, user, signature);
    const auth = await authModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    return auth;
  } catch (error) {
    console.log("error :- ", error);
  }
};
exports.authCreateUser = async ({ data }) => {
  const { uuid } = data;
  const user = authModel.findOneAndUpdate({ uuid }, data, { new: true });
  if (!user) throw new CustomError("Internal server error", 500);
  console.log(user);
  return user;
};
exports.authUpdateUser = async (data) => {
  const { uuid } = data;
  const user = User.findOneAndUpdate({ uuid }, data, { new: true });
  if (!user) throw new CustomError("Internal server error", 500);
  console.log(user);
  return user;
};
exports.subUpdateUserStatus = async (data) => {
  const { uuid } = data;
  const user = User.findOneAndUpdate({ uuid }, data, { new: true });
  if (!user) throw new CustomError("Internal server error", 500);
  console.log(user);
  return user;
};
exports.subDeleteUser = async (data) => {
  const { uuid } = data;
};
exports.login = async (payload, res) => {
  try {
    const { email, password } = payload.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }
    const user = await userModel.userModel
      .findOne({ email })
      .populate("additionalDetails")
      .exec();
    if (!user) {
      throw Object.assign(new Error(), {
        name: "INVALIDUSER",
        message: "User Not  Exists!",
      });
    }
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      throw Object.assign(new Error(), {
        name: "INVALIDPASSWORD",
        message: "Wrong Password",
      });
    } else {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      });

      console.log("login response");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
