const { cartService } = require(".");
const { publishMessage } = require("../../auth/work/producer.work");
const { consumeMessage } = require("../../user/worker/consumer.rabbit");
const cartModel = require("../models");
exports.createCart = async (payload) => {
  const { productId } = payload.params;
  const userId = payload.body.userId;
  const message = JSON.stringify({ productId });
  const { productsName, totalPrice } = payload.body;
  await publishMessage("sendingProductRequest", message);
  const products = await cartModel.products.push({ productId });

  const cart = await cartModel.create({
    userId,
    products: products,
    totalPrice,
  });
  return cart;
};
exports.getCart = async (payload) => {
  try {
    const { userId } = payload.body.userId;
    const cart = await cartModel.findOne({ userId });
    if (cart) {
      return cart;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
exports.updateCart = async (payload) => {
  try {
    const { cartId } = payload.params;
    const updatedCart = await cartModel.findByIdAndUpdate(
      cartId,
      { products: products,
      quantity:quantity,
    totalPrice:totalPrice },
      { new: true }
    );
    return updatedCart;
  } catch (error) {
    throw error;
  }
};
