const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactSchema, joiContactUpdateSchema } = require('../../validations')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', validation(joiContactSchema), controllerWrapper(ctrl.add))

router.delete('/:id', controllerWrapper(ctrl.removeById))

router.put('/:id', validation(joiContactUpdateSchema), controllerWrapper(ctrl.updateById))

module.exports = router
