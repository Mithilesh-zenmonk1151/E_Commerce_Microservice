const { authModel } = require("../models");
const CustomError = require("../utils/error");
const Producer = require("../work/producer.work");
const producer = new Producer();
const bcrypt = require("bcrypt");

exports.signup = async (payload) => {
  const { fullName, email, password, role } = payload.body;
  if (!(fullName && email && password && role))
    throw new CustomError("User credentials not found", 422);
  const user = await authModel.findOne({ email });
  if (user) {
    throw new CustomError("email already exists", 409);
  }

  console.log(fullName, email, password, role);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("services form data", fullName, email, password, role);
    const auth = await authModel.create({
      fullName: fullName,
      email: email,
      password: hashedPassword,
      role: role,
    });
    const message = await producer.sentMsg({
      exchangeName: "Auth",
      fullName: fullName,
      email: email,
      password: hashedPassword,
      role: role,
    });
    return { message, auth };
  } catch (error) {
    console.log("error :- ", error);
  }
};
exports.authCreateUser = async ({ data }) => {
  const { uuid } = data;
  const user = User.findOneAndUpdate({ uuid }, data, { new: true });
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
