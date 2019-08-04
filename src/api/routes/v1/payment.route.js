const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/payment.controller');
const {authorize, ADMIN, LOGGED_USER} = require('../../middlewares/auth');
const {createPayment} = require('../../validations/payment.validation');

const router = express.Router();

/**
 * Load user when API with userId route parameter is hit
 */
router.param('userId', controller.load);


router
  .route('/')
  .get(authorize(ADMIN), controller.list)
  .post(authorize(), validate(createPayment), controller.create);

router
  .route('/:userId')
  .get(authorize(LOGGED_USER), controller.get);


module.exports = router;
