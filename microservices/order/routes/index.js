const router= require("express").Router()
router.use("/orders",require("./orders.route"))
module.exports=router