const Joi = require('joi');
const Payment = require('../models/payment.model');
const {sample} = require('lodash');

module.exports = {

  // POST /v1/payment
  createPayment: {
    body: {
      cardHolderName: Joi.string().required(),
      cardNumber: Joi.string().min(10).max(20).required(),
      expiryMonth: Joi.string().regex(/^(0[1-9]|1[0-2]|[1-9])\/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$/),
      cvc: Joi.string().required().min(3).max(4),
      createdBy: Joi.string().required().max(128),
      product: Joi.string().required().max(128),
      status: Joi.string().default(sample(Payment.paymentStatus))
    }
  }
};
