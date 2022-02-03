const { getMultiplicityType } = require('../utils/numbersUtil')

/**
 * @class NumbersController
 */
class NumbersController {
  /**
   * Handler for endpoint to check number multiplicity
   *
   * @param {object} req
   * @param {object} res
   * @returns {Promise<*>}
   */
  static async checkMultiplicity(req, res) {
    const { params: { number } } = req

    const multiplicityType = getMultiplicityType(Number(number))

    const data = {
      ...(multiplicityType ? { multiplicityType } : { number }),
    }

    return res.status(200).json({ data })
  }
}

module.exports = NumbersController
