function calculateFactorial(number) {
  let fact = 1;
  for (let i = 2; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

let number = 5;
console.log(calculateFactorial(number));
