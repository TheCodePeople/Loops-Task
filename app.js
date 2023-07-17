function calculateFactorial(number) {
 
 let factorial =1;

  for (let i = 1; i <= number; i++) {
    
    factorial = factorial * i;
    console.log(`the factorial of ${i} = ${factorial}`);
    
    
  }
  console.log(`the full factorial is = ${factorial}`);
}
calculateFactorial(5);
