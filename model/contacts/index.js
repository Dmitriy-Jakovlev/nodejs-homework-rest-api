const fs = require('fs/promises')
const path = require('path')
const { v4 } = require('uuid')

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  const data = await fs.readFile(contactsPath)
  const contacts = JSON.parse(data)
  return contacts
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const findContact = contacts.find(contact => contact.id === contactId)
  if (!findContact) {
    return null
  }
  return findContact
}

const removeContact = async (id) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  const removeContacts = contacts.splice(idx, 1)
  await update(contacts)
  return removeContacts
}

const update = async(data) => {
  const parsedData = JSON.stringify(data)
  await fs.writeFile(contactsPath, parsedData)
}

const updateContact = async (id, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...contacts[idx], ...body }
  await update([...contacts])
  return contacts[idx]
}
const addContact = async (body) => {
  const contacts = await listContacts()
  const newContacts = { ...body, id: v4() }
  contacts.push(newContacts)
  await update(contacts)
  return newContacts
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  update
}
