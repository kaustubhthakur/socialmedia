const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {getUser,getUsers,followUnFollowUser,deleteUser} = require('../controllers/users')
router.get('/',getUsers)
router.get('/:userId',protectRoute,getUser)
router.put('/:userId',protectRoute,followUnFollowUser)
router.delete('/:userId',protectRoute,deleteUser);
module.exports = router;