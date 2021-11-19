const { Contact } = require('../../models')

const getAll = async (req, res) => {
  const { page, limit } = req.query
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
