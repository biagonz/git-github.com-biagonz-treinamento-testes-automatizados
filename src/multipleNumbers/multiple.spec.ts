const multiple = require('./multiple')


describe('sum of all multiple numbers of 3 or 5 ', () => {
  it('should be able to return the sum of multiples of 3 or 5 of natural numbers below 10', () => {
    expect(multiple.multipleThreeOrFive(10)).toBe(23)
  })

  it('should be able to return the sum of multiples of 3 or 5 of natural numbers below 1000', () => {
    expect(multiple.multipleThreeOrFive(1000)).toBe(233168)
  })
})

describe('sum of all multiple numbers of 3 and 5 ', () => {
  it('should be able to return the sum of multiples of 3 and 5 of natural numbers below 1000', () => {
    expect(multiple.multipleThreeAndFive(1000)).toBe(33165)
  })
  it('should be able to return the sum of multiples of 3 and 5 of natural numbers below 20', () => {
    expect(multiple.multipleThreeAndFive(20)).toBe(15)
  })
})

describe('sum of all multiple numbers of 3 or 5 and 7', () => {
  it('should be able to return the sum of multiples of 3 or 5 and 7 of natural numbers below 1000', () => {
    expect(multiple.multipleThreeOrFiveAndSeven(1000)).toBe(33173)
  })
})
