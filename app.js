function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  console.log(calculateFactorial(5));
  