const express = require('express')
const router = express.Router();
const protectRoute = require('../utils/protectRoute')
const {createpost,getPost,getPosts,deletePost,likeUnlikePost} = require('../controllers/posts')
router.post('/',protectRoute,createpost)
router.get('/',getPosts)
router.get('/:id',protectRoute,getPost)
router.put('/:postId',protectRoute,likeUnlikePost)
router.delete('/:postId',protectRoute,deletePost);
module.exports = router;