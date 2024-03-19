const { shippingService } = require("../services");
const CustomError = require("../utils/error");
exports.createShippingdetails = async (req, res) => {
  try {
    const response = await shippingService.createShippingdetails(req);
    res.status(201).json({
      shipping: response.shipping,
      message: "Shipping details added successfully",
    });
  } catch (error) {
    CustomError("Internal server error", 500);
  }
};
exports.getShippingDetails = async (req, res) => {
  try {
    const response = await shippingService.getShippingDetails(req);
    if (!response) {
      CustomError("shipping details not found", 404);
    } else {
      res.status(200).json({
        shippingDetails: response.shippingDetails,
        message: "shipping details got successfully",
      });
    }
  } catch (error) {
    CustomError("Internal server error", 500);
  }
};
exports.updateShippingDetails = async (req, res) => {
  try {
    const response = await shippingService.updateShippingDetails(req);
    res.status(200).json({
      updatedShippingDetails: response.updatedShippingDetails,
      message: " shipping details updated successfully",
    });
  } catch (error) {
    CustomError("Internal server error", 500);
  }
};
exports.deleteShippingDetails = async (req, res) => {
  try {
    const response = await shippingService.deleteShippingDetails(req);
    res.status(200).json({
      deleteShippingDetails: response.deleteShippingDetails,
      message: "shipping details deleted successfully",
    });
  } catch (error) {}
};
