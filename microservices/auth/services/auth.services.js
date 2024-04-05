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
  const {email} = data;
    const pwd = data.password;
    if(!(email && pwd)) throw new CustomError("User credentials not found", 422);
    const userDetails = await authModel.findOne({email : email});
    if(!userDetails) throw new CustomError("User doesn't exist", 404);
    console.log("login", data, "pwd", pwd);
    if(!( await bcrypt.compare(pwd, userDetails.password))) throw new CustomError("User password is wrong", 401)
    const token = jwt.sign({id : userDetails._id}, 'Zenmonk', {
        expiresIn: '4h'
    })
    if(!token) throw new CustomError("Token not generating", 500);
    const {_id , password, ...user} = userDetails._doc;
    return {token, user};
  }