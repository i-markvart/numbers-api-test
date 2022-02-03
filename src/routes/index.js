const { Router } = require('express')

const router = Router()

// Routers goes here
const numbersRouter = require('./numbersRouter')

router.use('/numbers', numbersRouter)

// Route Not Found middleware
router.all('*', (req, res, next) => {
  next(new Error('Route Not Found'))
})

// Error handler middleware
router.use((error, req, res, next) => {
  console.error(error)

  const { message, details = [] } = error
  const statusCode = error.statusCode || 500

  return res
    .status(statusCode)
    .json({ message, details })
})

module.exports = router
