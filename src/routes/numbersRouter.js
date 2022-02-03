const router = require('express').Router()

const NumbersController = require('../controllers/numbersController')

router.get(
  '/multiplicity/:number',
  NumbersController.checkMultiplicity,
)

module.exports = router
