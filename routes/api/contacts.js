const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:id', controllerWrapper(ctrl.getById))

router.post('/', validation(joiSchema), controllerWrapper(ctrl.add))

router.delete('/:id', controllerWrapper(ctrl.removeById))

router.put('/:id', validation(joiSchema), controllerWrapper(ctrl.updateById))

router.patch('/:id/favorite', controllerWrapper(ctrl.updateStatusContact))

module.exports = router
