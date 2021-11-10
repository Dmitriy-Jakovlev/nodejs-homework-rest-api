const { NotFound } = require('http-errors')

const contactsOperations = require('../../model/contacts')

const updateById = async (req, res, next) => {
  const { id } = req.params
  const result = await contactsOperations.updateContact(id, req.body)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'Success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateById
