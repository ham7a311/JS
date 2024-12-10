/*                                                                  JS Algorithms


1. Math.factorial
This function calculates the factorial of a given non-negative integer num. The factorial of a number n (denoted as n!) is the product of all positive integers from 1 to n. The function works as follows:

It initializes a variable result to 1.
It uses a for loop to multiply result by each integer from 1 to num.
If num is 0 or 1, it returns 1, since the factorial of both 0 and 1 is defined as 1.
If num is negative, it returns undefined, as factorials are not defined for negative numbers.
Finally, it returns the computed factorial value.

2. fibonacci
This function generates the Fibonacci sequence up to the n-th term. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The function operates as follows:

It initializes an array fib with the first two Fibonacci numbers: 0 and 1.
It uses a for loop to calculate subsequent Fibonacci numbers by adding the two most recent numbers in the sequence.
The loop continues until it reaches the n-th term.
Finally, it returns the array fib, which contains the Fibonacci sequence up to the n-th term.

3. isPrime
This function checks whether a given integer n is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function works as follows:

It first checks if n is less than 2; if so, it returns false, as prime numbers are defined to be greater than 1.
It then uses a for loop to test divisibility of n by all integers from 2 up to the square root of n. This is an efficient way to check for factors.
If n is divisible by any of these integers, it returns false, indicating that n is not prime.
If no divisors are found, it returns true, confirming that n is a prime number.
*/


Math.factorial = function (num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i ;
    }
    
    if (num === 0 || num === 1) {
        return 1;
    } else if (num < 0) {
        return undefined;
    }
    return result;

}


function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}


function isPrime(n) {
    if (n < 2) {
        return false;
    };

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        };
    };

    return true;
}
