/*                                                                  JS Algorithms

Two solutions for each function, recursive and itterative and one bitwise solution

*/






/* 
1. (1) factorial   ===> Itteratie Algorithm
The factorial function calculates the factorial of a non-negative integer n. The factorial of n (denoted as n!) is the product of all positive integers from 1 to n.
How It Works:

Initialization: Start with a variable result set to 1.

Loop: Use a for loop to multiply result by each integer from 1 to n.

Base Cases:
        If n is 0 or 1, return 1 (since 0!=1).
        If n is negative, return undefined (factorials for negative numbers do not exist).

Return Result: After the loop, return the computed result.


Time Complexity

The time complexity is O(n), as the function iterates through all integers up to n.
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
1. (2) recursiveFactorial  ===> Recursive Algorithm
The recursive factorial function calculates the factorial of a non-negative integer n using recursion. The factorial of n (denoted as n!) is the product of all positive integers from 1 to n.
How It Works:

Base Case: If n is 0, return 1 (since 0!=1).

Recursive Case: For n > 0, return n multiplied by the factorial of n−1. This continues until the base case is reached.


Time Complexity

The time complexity is O(n), as the function makes n recursive calls.
*/
function recursiveFactorial(n) {

    if (n == 0) {
        return 1;
    }
    n * recursiveFactorial(n - 1); // O(n)
}






/* 
2. (1) fibonacci  ===> Itteratie Algorithm
The fibonacci function generates the Fibonacci series up to a specified number n using an iterative approach. The Fibonacci sequence starts with the numbers 0 and 1, and each subsequent number is the sum of the two preceding ones.
How It Works:

Initialization: An array fib is initialized with the first two Fibonacci numbers, 0 and 1.

Loop: A for loop iterates from index 2 to n−1. In each iteration, the next Fibonacci number is calculated by summing the two previous numbers in the array:

            fib[i] = fib[i - 1] + fib[i - 2].


Return Result: After the loop completes, the function returns the array fib, which contains the Fibonacci series up to n.

Time Complexity

The time complexity is O(n), as the function iterates through the loop n−2n-2n−2 times to compute the Fibonacci numbers.
*/
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib; // O(n)
}





/* 
2. (2) recursiveFibonacci  ===> Recursive Algorithm
The recursive Fibonacci function calculates the nnn-th Fibonacci number using a straightforward recursive approach. The Fibonacci sequence is defined such that each number is the sum of the two preceding ones, starting from 0 and 1.
How It Works:

Base Case: If nnn is less than 2 (i.e., n=0 or n=1), the function returns n. This handles the first two Fibonacci numbers directly.

Recursive Case: For n ≥ 2, the function calls itself twice:
        recursiveFibonacci(n - 1) computes the previous Fibonacci number.
        recursiveFibonacci(n - 2) computes the Fibonacci number before that.
        The results of these two calls are summed to produce the nnn-th Fibonacci number.


Time Complexity

The time complexity of this recursive approach is O(2^n). This exponential growth occurs because each call to the function generates two additional calls, leading to a binary tree of calls that grows rapidly as n increases.
*/
function recursiveFibonacci(n) {

    if (n < 2) {
        return n
    };

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // O(2^n)
}






/* 
3. isPrime  ===> Itteratie Algorithm
The isPrime function checks whether a given number nnn is a prime number using an efficient algorithm that leverages the properties of prime numbers.
How It Works:

Base Case: The function first checks if n is less than 2. Since prime numbers are defined as greater than 1, it returns false for any number less than 2.

Loop Through Possible Divisors: The function then enters a for loop that iterates from 2 to the square root of nnn (inclusive). This is based on the mathematical principle that if n is divisible by any number greater than its square root, it must also be divisible by a number smaller than its square root.

Divisibility Check: Within the loop, the function checks if nnn is divisible by iii (i.e., if n % i === 0). If it finds any divisor, it returns false, indicating that n is not a prime number.

Return True: If the loop completes without finding any divisors, the function returns true, confirming that n is a prime number.


Time Complexity

The time complexity of this function is O(√n). This efficiency arises because the function only checks for factors up to the square root of n, significantly reducing the number of iterations compared to checking all numbers up to n.
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
4. (1) isPowerOfTwo  ===> Itteratie Algorithm
The isPowerOfTwo function determines whether a given positive integer n is a power of two. This function employs a straightforward iterative approach to check the condition.
How It Works:

Base Case: The function first checks if nnn is less than 1. Since powers of two are defined for positive integers only (i.e., 1,2,4,8,…1, 2, 4, 8, \ldots1,2,4,8,…), it returns false for any non-positive integer.

Iterative Division: The function enters a while loop that continues as long as nnn is greater than 1. Within the loop:

It checks if n is odd using the condition n % 2 !== 0. If n is odd, it cannot be a power of two, and the function returns false.
If n is even, it divides n by 2 (n /= 2), effectively reducing the number to check if it can be expressed as 2^k.


Return True: If the loop completes and n is reduced to 1, the function returns true, indicating that the original number was indeed a power of two.


Time Complexity

The time complexity of this function is O(log⁡ n). This is because the function divides nnn by 2 in each iteration, leading to a logarithmic number of steps relative to the size of n.
*/
function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }

    return true; // O(log n)
}






/* 
4. (2) isPowerOfTwoBitWise  ===> Bitwise Algorithm
The isPowerOfTwoBitWise function checks whether a given positive integer n is a power of two using a bitwise operation. This method is efficient and operates in constant time.
How It Works:

Base Case: The function first checks if n is less than 1. Since powers of two are defined for positive integers only (i.e., 1,2,4,8,…), it returns false for any non-positive integer.

Bitwise Operation: The core of the function is the expression (n & (n - 1)) === 0. This expression utilizes a property of binary numbers:

A number that is a power of two has exactly one bit set in its binary representation. For example:
            111 (binary 0001)
            222 (binary 0010)
            444 (binary 0100)
            888 (binary 1000)

When you subtract 1 from a power of two, all the bits lower than the set bit become 1. For instance:

4 − 1 = 3 (binary 0011)

Therefore, performing a bitwise AND between n and n−1 will yield zero if n is a power of two:

4&3 = 0100&0011 = 0000


Return Value: If the result of the bitwise AND operation is zero, the function returns true, indicating that n is a power of two. Otherwise, it returns false.


Time Complexity

The time complexity of this function is O(1) because it performs a fixed number of operations regardless of the size of n.
*/
function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0; // O(1)
}
