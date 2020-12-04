const magicNumber = require('./magicNumbers')

describe('magic numbers', () => {
  // it('should be able to return squared of any number', () => {
  //   expect(magicNumber(7)).toBe('49')
  // })

  // it('should be able to return split of exponent', () => {
  //   expect(magicNumber(7)).toBe(["4", "9"])
  // })

  // it('should be able to return split of exponent', () => {
  //   expect(magicNumber(7)).toBe(97)
  // })

  // it('should be able to return split of exponent', () => {
  //   expect(magicNumber(8)).toBe(1)
  // })

  it('should be able to return split of exponent', () => {
    expect(magicNumber(7)).toBe(1)
  })

})