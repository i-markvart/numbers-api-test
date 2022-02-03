/**
 * @class NumbersController
 */
class NumbersController {
  /**
   * Handler for Test Get endpoint
   *
   * @param {object} req
   * @param {object} res
   * @return {Promise<*>}
   */
  static async checkMultiplicity(req, res) {
    return res.status(200).json({ test: true })
  }
}

module.exports = NumbersController
