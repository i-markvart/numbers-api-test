/**
 * Checks if number is a multiple of another number
 *
 * @param {Number} number
 * @param {Number} multiplicity
 * @returns {Boolean}
 */
function isMultipleOf(number, numberMultiple) {
  return !(number % numberMultiple)
}

/**
 * Checks if number is a multiple of 3 and/or 5 and returns corresponding letter
 *
 * @param {Number} number
 * @returns {String|Boolean}
 */
function getMultiplicityType(number) {
  const result = []
  const multiplicityTypesMap = {
    3: 'G',
    5: 'N',
  }

  Object.keys(multiplicityTypesMap).forEach((numberMultiple) => {
    if (isMultipleOf(number, numberMultiple)) {
      result.push(multiplicityTypesMap[numberMultiple])
    }
  })

  return result.length ? result.join('') : false
}

module.exports = {
  getMultiplicityType,
}
