const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

router.route('/:userId/friends/:friendId').put(addFriend)
module.exports = router;
