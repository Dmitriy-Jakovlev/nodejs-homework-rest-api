const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactSchema } = require('../../validations')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', validation(joiContactSchema), controllerWrapper(ctrl.add))

router.delete('/:id', controllerWrapper(ctrl.removeById))

router.put('/:id', validation(joiContactSchema), controllerWrapper(ctrl.updateById))

module.exports = router
