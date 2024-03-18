const orderModel = require("../models");
exports.createOrders = async (payload) => {
  try {
    const { productName, image, status, description } = payload;
    const orders = await orderModel.create({
      productName: productName,
      image: image,
      status: status,
      description: description,
    });
    return orders;
  } catch (error) {
    throw error;
  }
};
exports.getOrders = async (payload) => {
  try {
    const { userId } = payload.params;
    const orders = await orderModel.find({ userId }).sort({ createdAt: -1 });
    return { orders };
  } catch (error) {
    throw error;
  }
};
exports.updateOrders = async (payload) => {
  try {
    const { orderId } = payload.params;
    const { status } = payload.body;
    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status: status },
      { new: true }
    );
    return updatedOrder
  } catch (error) {
    throw error;
  }
};
exports.delete = async (payload) => {
  try {
    const { id } = payload.params;
    const deleted = await orderModel.findByIdAndDelete(id);
    return { deleted };
  } catch (error) {
    throw error;
  }
};
