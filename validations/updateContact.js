const Joi = require('joi')

const joiContactUpdateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phone: Joi.string().min(8),
})

module.exports = joiContactUpdateSchema
