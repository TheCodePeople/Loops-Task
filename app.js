function calculateFactorial(number) {
   console.log(number);
   let factorial = 1;
 
   for (let i=1; i<=number; i++)
   {factorial=factorial*i;
   }
return factorial;
}

console.log(calculateFactorial(5));

// let result=7;
// const mustafa = (a,b) => {
// result = a +b
// return result
// }
// console.log(result)
// console.log(mustafa(1,2))