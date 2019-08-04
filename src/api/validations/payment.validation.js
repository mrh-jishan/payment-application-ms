const Joi = require('joi');

module.exports = {

  // POST /v1/payment
  createPayment: {
    body: {
      cardHolderName: Joi.string().email().required(),
      cardNumber: Joi.string().min(10).max(20).required(),
      expiryMonth: Joi.string().regex(/^(0[1-9]|1[0-2]|[1-9])\/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$/),
      cvc: Joi.string().min(3).max(4),
      createdBy: Joi.string().max(128)
    }
  }
};