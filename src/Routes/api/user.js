const express = require('express');

const router = express.Router();
const {
  index,
  show,
  store,
} = require('../../Controller/userController');

router.route('/')
  .post(store)
  .get(index);

router.route('/:id')
  .get(show);

module.exports = router;
