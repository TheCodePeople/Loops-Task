function calculateFactorial(number) {
    let factorial=1
for(i=0;i<number;i++){
    factorial=factorial*(number-i)
}
console.log(factorial)

}
let x = prompt("enter number")
calculateFactorial(x)
