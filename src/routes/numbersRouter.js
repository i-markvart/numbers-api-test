const router = require('express').Router()

const NumbersController = require('../controllers/numbersController')
const { validateNumberParamMiddleware } = require('../middlewares/validateRequestMiddleware')

router.get(
  '/multiplicity/:number',
  validateNumberParamMiddleware,
  NumbersController.checkMultiplicity,
)

module.exports = router
