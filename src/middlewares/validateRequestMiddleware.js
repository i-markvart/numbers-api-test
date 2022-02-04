/**
 * Validates `number` parameter from request
 *
 * @param {object} req
 * @param {object} res
 * @param {Function} next
 * @returns {*}
 */
function validateNumberParamMiddleware(req, res, next) {
  const { params: { number } } = req

  if (isNaN(Number(number))) {
    return res.status(400).json({
      data: {
        message: 'Bad Request',
        details: 'The {number} parameter must be a valid numeric value',
      }
    })
  }

  return next()
}

module.exports = {
  validateNumberParamMiddleware,
}
