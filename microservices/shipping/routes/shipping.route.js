const router = require("express").Router();
const {shippingController}= require("../controllers")
router.post("/",  shippingController.createShippingdetails);
router.get("/", shippingController.getShippingDetails);
router.put("/:shippingId",shippingController.updateShippingDetails);
router.delete("/:shippingId",shippingController.deleteShippingDetails);
module.exports = router;
