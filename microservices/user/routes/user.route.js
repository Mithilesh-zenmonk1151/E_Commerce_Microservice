const router = require("express").Router();
const { userController } = require("../controllers");
router.post("/signup",  userController.signup);
router.post("/login", userController.login);
router.put("/",userController.updateUserProfile);
router.delete("/",userController.deleteUser);
module.exports = router;
