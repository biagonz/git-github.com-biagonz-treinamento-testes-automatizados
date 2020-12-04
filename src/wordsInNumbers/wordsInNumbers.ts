

const maskOnlyString = (value: string) => {
  const result = value.toString()
  return result.replace(/\d/g, "")
}

const wordsInNumber = (words: string) => {
  const result = exports.multipleThreeOrFive(5)
  return result;
}

module.exports = {
  maskOnlyString,
  wordsInNumber
}