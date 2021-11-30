const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')

const { User } = require('../../models')
const { sendMail } = require('../../utils')

const register = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email=${email} allready exist`)
  }
  const avatarURL = gravatar.url(email, { protocol: 'http', s: '250' })

  const verificationToken = nanoid()

  const newUser = new User({ email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()

  const mail = {
    to: email,
    subject: 'Подтверждение регистрации',
    html: `<a href='http://localhost:3000/api/auth/verify/${verificationToken}'>Нажмите для подтверждения email</a>`
  }
  await sendMail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Register success'
  })
}

module.exports = register
