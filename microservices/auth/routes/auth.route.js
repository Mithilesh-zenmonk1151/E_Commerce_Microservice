const router = require("express").Router();
const { authController } = require("../controllers");
router.post("/signup", authController.register);
module.exports = router;
