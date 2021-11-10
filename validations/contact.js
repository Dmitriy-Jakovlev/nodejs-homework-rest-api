const Joi = require('joi')

const joiContactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().min(8).required(),
})

module.exports = joiContactSchema
