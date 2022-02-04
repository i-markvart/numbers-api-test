const { getMultiplicityType } = require('../../src/utils/numbersUtil')

describe('Numbers util', () => {
  describe('getMultiplicityType function', () => {
    test('Should return `G` letter if number is multiple of 3', () => {
      const expectedResult = 'G'
      const result = getMultiplicityType(9)

      expect(result).toEqual(expectedResult)
    })

    test('Should return `N` letter if number is multiple of 5', () => {
      const expectedResult = 'N'
      const result = getMultiplicityType(10)

      expect(result).toEqual(expectedResult)
    })

    test('Should return `GN` letter if number is multiple of both 3 and 5', () => {
      const expectedResult = 'GN'
      const result = getMultiplicityType(15)

      expect(result).toEqual(expectedResult)
    })

    test('Should return `false` if number is not multiple of both 3 and 5', () => {
      const expectedResult = false
      const result = getMultiplicityType(7)

      expect(result).toEqual(expectedResult)
    })
  })
})
