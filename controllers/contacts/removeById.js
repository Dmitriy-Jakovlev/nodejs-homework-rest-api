const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const removeById = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndRemove(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'Success',
    code: 200,
    message: 'Remove success'
  })
}

module.exports = removeById
