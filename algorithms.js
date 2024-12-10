/*                                                                  JS Algorithms

Two solutions for each function, recursive and itterative

*/






/* 
1. (1) factorial
This function calculates the factorial of a given non-negative integer num. The factorial of a number n (denoted as n!) is the product of all positive integers from 1 to n. The function works as follows:

It initializes a variable result to 1.
It uses a for loop to multiply result by each integer from 1 to num.
If num is 0 or 1, it returns 1, since the factorial of both 0 and 1 is defined as 1.
If num is negative, it returns undefined, as factorials are not defined for negative numbers.
Finally, it returns the computed factorial value.
*/
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i ;
    }
    
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        return undefined;
    }
    return result; // O(n)

}



/* 
1. (2) recursiveFactorial
This function calculates the factorial of a non-negative integer nnn using a recursive approach. 
The factorial of a number nnn, denoted as n!n!n!, is the product of all positive integers from 1 to nnn.
*/
function recursiveFactorial(n) {

    if (n == 0) {
        return 1;
    }
    n * recursiveFactorial(n - 1); // O(n)
}




/* 
2. (1) fibonacci
This function generates the Fibonacci sequence up to the n-th term. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. The function operates as follows:

It initializes an array fib with the first two Fibonacci numbers: 0 and 1.
It uses a for loop to calculate subsequent Fibonacci numbers by adding the two most recent numbers in the sequence.
The loop continues until it reaches the n-th term.
Finally, it returns the array fib, which contains the Fibonacci sequence up to the n-th term.
*/
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib; // O(n)
}



/* 
2. (2) recursiveFibonacci
This function calculates the nnn-th term of the Fibonacci sequence using a recursive approach.
The Fibonacci sequence is defined such that each number is the sum of the two preceding ones, starting from 0 and 1. 
The sequence begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, etc.
*/
function recursiveFibonacci(n) {

    if (n < 2) {
        return n
    };

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // O(2^n)
}




/* 
3. isPrime
This function checks whether a given integer n is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function works as follows:

It first checks if n is less than 2; if so, it returns false, as prime numbers are defined to be greater than 1.
It then uses a for loop to test divisibility of n by all integers from 2 up to the square root of n. This is an efficient way to check for factors.
If n is divisible by any of these integers, it returns false, indicating that n is not prime.
If no divisors are found, it returns true, confirming that n is a prime number.
*/
function isPrime(n) {
    if (n < 2) {
        return false;
    };

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        };
    };

    return true; // O(√n)
}




/* 
4. (1) isPowerOfTwo
This function determines whether a given integer n is a power of two. A number is considered a power of two if it can be expressed as 2k2^k2k, where kkk is a non-negative integer (e.g., 1, 2, 4, 8, 16, etc.). The function works as follows:

It first checks if n is less than 1. If so, it returns false, since powers of two are positive integers.
It then enters a while loop that continues as long as n is greater than 1.

Inside the loop, it checks if n is odd (i.e., n % 2 !== 0). If n is odd, it cannot be a power of two, so the function returns false.
If n is even, it divides n by 2.


If the loop completes and n has been reduced to 1, the function returns true, indicating that the original number was indeed a power of two.

*/
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }

    return true; // O(log n)
}





/* 
4. (2) isPowerOfTwoBitWise
This function also checks whether a given integer n is a power of two, but it does so using a bitwise operation for a more efficient solution. The key property of powers of two in binary representation is that they have exactly one bit set to 1. The function operates as follows:

It first checks if n is less than 1. If so, it returns false, since powers of two are positive integers.
It then uses the expression (n & (n - 1)) === 0 to determine if n is a power of two:

The expression n & (n - 1) clears the lowest set bit of n. If n is a power of two, this operation will yield 0, because there is only one bit set in n.


If the result of the bitwise operation is 0, the function returns true, indicating that n is a power of two. Otherwise, it returns false.

Both functions effectively determine if a number is a power of two, but the second function does so in a more efficient manner using bitwise operations.
*/
function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0; // O(1)
}
