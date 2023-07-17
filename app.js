function calculateFactorial(number) {
    
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  console.log(number); 

}

calculateFactorial(5);

