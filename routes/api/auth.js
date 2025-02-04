const express = require('express')

const { validation, authenticate, controllerWrapper, upload } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiSchema, joiSchemaVerify } = require('../../models/user')
const router = express.Router()

router.post('/register', validation(joiSchema), controllerWrapper(ctrl.register))

router.post('/login', validation(joiSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.get('/current', authenticate, controllerWrapper(ctrl.current))

router.patch('/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.updateAvatar))

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

router.post('/verify', validation(joiSchemaVerify), controllerWrapper(ctrl.reVerify))

module.exports = router
