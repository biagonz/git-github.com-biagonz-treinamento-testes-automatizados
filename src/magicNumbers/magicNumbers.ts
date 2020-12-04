const magicArr = new Set();

const sumExponent = (value: number) => Math.pow(Number(value), 2)

const reducer = (acc: number, curr: number) => acc + curr

const convertArrStringToArrNumber = (arr: Array<string>) => arr.map(item => Number(item))

const magicNumbers = (number: number): number => {
  const exponentResult = String(Math.pow(number, 2))
  return magicNumberBase(exponentResult)
}

const magicNumberBase = (number: string):number=> {
  const splitResult = convertArrStringToArrNumber(number.split(""))
  const sumExponentResult = splitResult.map(sumExponent).reduce(reducer)

  if (!magicArr.has(Number(number))) {
    magicArr.add(Number(number))
    return magicNumberBase(String(sumExponentResult))
  }
  return sumExponentResult
}

module.exports = magicNumbers
