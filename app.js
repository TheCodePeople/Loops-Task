


function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(`The factorial of ${num} is ${factorial}.`);
}

let num = prompt("Enter a number: ");
factorial(num);