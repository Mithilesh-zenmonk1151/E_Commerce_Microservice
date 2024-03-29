const router = require("express").Router();
const { authController } = require("../controllers");
router.post("/signup", authController.register);
router.post("/login",authController.login)
module.exports = router;
