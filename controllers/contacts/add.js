const { contactsOperations } = require('../../model/contacts')

const add = async (req, res, next) => {
  const result = await contactsOperations.addContact(req.body)
  res.status(201).json({
    status: 'Success',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = add
