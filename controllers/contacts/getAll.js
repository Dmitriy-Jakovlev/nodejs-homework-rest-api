const { contactsOperations } = require('../../model/contacts')

const getAll = async (req, res) => {
  const result = await contactsOperations.listContacts()
  res.json({
    status: 'Success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = getAll
