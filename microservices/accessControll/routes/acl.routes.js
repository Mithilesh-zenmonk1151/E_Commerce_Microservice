const {aclController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()
router.get('/roles', aclController.getRole)
module.exports = router 