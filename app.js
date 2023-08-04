function calculateFactorial(number) {
    let factorial = 1;
  
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
  
    return factorial;
  }
  
  const number = 5;
  const result = calculateFactorial(number);
  
  console.log(`The factorial of ${number} is ${result}`);