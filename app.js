function calculateFactorial(number) {
    let factorial=1;
    for(let counter=number;counter>0;--counter)
    {
        factorial =factorial*counter;
    }
    console.log(factorial);
}
calculateFactorial(5);
calculateFactorial(10);
calculateFactorial(15);
