const
  model = require('./model'),
  express = require('express'),
  router = express.Router();

router.get('/restaurants/:order_by', (req, res) => model.getRestaurant(req, res));
router.post('/restaurants', (req, res) => model.postRestaurant(req.body, res));

module.exports = router;
