const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends/:friendId').put(addFriend)

module.exports = router;
