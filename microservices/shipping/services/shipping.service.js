const shippingModel = require("../models");
exports.createShippingdetails = async (payload) => {
  try {
    const { orderId } = payload.params;
    const { ArrivingBy, shippingStatus, cityName, currentCityName } =
      payload.body;
    const shipping = await shippingModel.create({
      orderId: orderId,
      ArrivingBy: ArrivingBy,
      shippingStatus: shippingStatus,
      cityName: cityName,
      currentCityName: currentCityName,
    }).populate({
        path:"order",
        select:"order"
    });
    return shipping;
  } catch (error) {
    throw error;
  }
};
exports.getShippingDetails = async (payload) => {
  try {
    const { orderId } = payload.params;
    const shippingDetails = await shippingModel.find({ orderId });
    return shippingDetails;
  } catch (error) {
    throw error;
  }
};
exports.updateShippingDetails = async (payload) => {
  try {
    const { shippingId } = payload.params;
    const { ArrivingBy, shippingStatus, cityName, currentCityName } =
      payload.body;
    const updatedShippingDetails = await shippingModel.findByIdAndUpdate(
      shippingId,
      {
        ArrivingBy: ArrivingBy,
        shippingStatus: shippingStatus,
        cityName: cityName,
        currentCityName: currentCityName,
      },
      { new: true }
    );

    return updatedShippingDetails;
  } catch (error) {
    throw error;
  }
};
exports.deleteShippingDetails = async (payload) => {
  try {
    const { shippingId } = payload.params;
    const deleteShippingDetails = await shippingModel.findByIdAndDelete(
      shippingId
    );
    return deleteShippingDetails;
  } catch (error) {
    throw error;
  }
};
