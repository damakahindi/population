const express = require('express');

const router = express.Router();
const Population = require('../controllers/population');

router.route('/population')
  .post(Population.create)
  .get(Population.all);

router.route('/population/:id')
  .get(Population.get)
  .put(Population.update)
  .delete(Population.delete);

module.exports = router;
