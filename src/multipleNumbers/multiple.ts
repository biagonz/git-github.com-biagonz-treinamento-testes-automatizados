
const multipleThreeOrFive = (limit: number) => {
  let result = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 5 === 0 || i % 3 === 0) result += i
  }
  return result
}

const multipleThreeAndFive = (limit: number): number => {
  let result = 0;
  for (let i = 0; i < limit; i++) {
    if (i % 5 === 0 && i % 3 === 0) result += i
  }
  return result;
}

const multipleThreeOrFiveAndSeven = (limit: number): number => {
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    if ((i % 5 === 0 || i % 3 === 0) && i % 7 === 0) result += i
  }
  return result;
}

module.exports = {
  multipleThreeOrFive,
  multipleThreeAndFive,
  multipleThreeOrFiveAndSeven
}
