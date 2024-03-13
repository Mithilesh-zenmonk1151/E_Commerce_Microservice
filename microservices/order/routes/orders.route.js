const router= require("express").Router();
const {orderController}= require("../controller")
router.post("/", orderController.createOrders)
router.get("/",orderController.getOrders )
router.put("/:orderId",orderController.updateOrders )
router.delete("/:orderId",orderController.deleteOrders)
module.exports=router