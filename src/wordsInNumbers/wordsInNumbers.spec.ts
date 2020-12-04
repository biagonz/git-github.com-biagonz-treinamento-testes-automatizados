const words = require('./wordsInNumbers')

describe('mask only string', () => {
  it('should be able to return only string', () => {
    expect(words.maskOnlyString(23452364231)).toBe("")
  })
})

describe('words in number', () => {
  it('should be able to return only string', () => {
    expect(words.maskOnlyString(23452364231)).toBe("")
  })
})