const { BadRequest } = require('http-errors')

const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { page = 1, limit = 20 } = req.query
  if (isNaN(page)) {
    throw new BadRequest('not number')
  }
  if (isNaN(limit)) {
    throw new BadRequest('not number')
  }
  const { _id } = req.user
  const skip = (page - 1) * limit
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite owner',
    { skip, limit: +limit }).populate('owner', '_id')
  res.json({
    status: 'Success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = getAll
