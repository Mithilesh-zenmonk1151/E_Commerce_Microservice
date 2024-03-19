const router = require("express").Router();
router.use("/shipping", require("./shipping.route"));
module.exports = router;