const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/ThoughtController');

// /api/Thoughts 
router.route('/')
.get(getThoughts)
.post(createThought);

// /api/Thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addThoughtReaction)
.delete(removeThoughtReaction);

module.exports = router;
