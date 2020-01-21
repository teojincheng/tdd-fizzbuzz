module.exports = number => {
  const isMultipleOfThree = number % 3 === 0;
  const isMultipleOfFive = number % 5 === 0;
  const isMultipleOfFifteen = isMultipleOfThree && isMultipleOfFive;
  const isZero = number === 0;

  if (isZero) {
    return 0;
  } else if (isMultipleOfFifteen) {
    return "FizzBuzz";
  } else if (isMultipleOfThree) {
    return "Fizz";
  } else if (isMultipleOfFive) {
    return "Buzz";
  }
  return number;
};
