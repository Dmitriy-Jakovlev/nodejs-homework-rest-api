const { NotFound } = require('http-errors')

const { Contact } = require('../../models')

const updateStatusContact = async (req, res) => {
  const { favorite } = req.body
  const { id } = req.params
  const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  if (!result) {
    res.json({
      status: 'error',
      code: 400,
      message: 'missing field "favorite"',
    })
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    data: result,
  })
}

module.exports = updateStatusContact
