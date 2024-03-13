const { orderService } = require("../services");
exports.createOrders = async (req, res) => {
  try {
    const response = await orderService.createOrders(req);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
exports.getOrders = async (req, res) => {
  try {
    const response = await orderService.getOrders(req);
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
exports.updateOrders = async (req, res) => {
  try {
    const response = await orderService.updateOrders(req);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteOrders = async (req, res) => {
  try {
    const response = await orderService.deleteOrders(req);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
