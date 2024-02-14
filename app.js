function calculateFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

while (true) {
    let number = parseInt(prompt("Enter a number:"));
    alert(`Factorial of ${number} is ${calculateFactorial(number)}`);
}