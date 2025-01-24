


/*                                                                  JS Algorithms

Two solutions for each function, recursive and itterative and one bitwise solution

*/




/**
 * Iterative Factorial Function
  
 * This function calculates the factorial of a non-negative integer n.
 * The factorial of n (denoted as n!) is the product of all positive integers from 1 to n. The function handles base cases for 0 and negative integers.
  
 * How It Works:
          1. **Initialization**: 
             - Start with a variable `result` set to 1, which will hold the final product.
          
          2. **Loop**: 
             - Use a `for` loop to iterate through each integer from 1 to n, multiplying 
               `result` by the current integer.
          
          3. **Base Cases**: 
             - If n is 0 or 1, return 1, since by definition, 0! = 1 and 1! = 1.
             - If n is negative, return `undefined`, as factorials for negative numbers do not exist.
          
          4. **Return Result**: 
             - After the loop completes, return the computed `result`.
  
 * Time Complexity:
  - O(n): The function iterates through all integers up to n, resulting in linear time complexity.
 */

function factorial(n) {
    let result = 1; // Initialize result to 1

    // Loop from 1 to n, multiplying result by each integer
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by current integer i
    }
    
    // Handle base cases
    if (n === 0 || n === 1) {
        return 1; // Return 1 for 0! and 1!
    } else if (n < 0) {
        return undefined; // Return undefined for negative inputs
    }

    return result; // Return the computed factorial result
}





/**
 * Recursive Factorial Function
  
 * This function calculates the factorial of a non-negative integer n using recursion.
 * The factorial of n (denoted as n!) is the product of all positive integers from 1 to n.
  
 * How It Works:
          1. **Base Case**: 
             - If n is 0, return 1, since by definition, 0! = 1.
          
          2. **Recursive Case**: 
             - For n greater than 0, return n multiplied by the factorial of (n - 1).
             - This process continues recursively until the base case is reached.
  
 * Time Complexity:
  - O(n): The function makes n recursive calls, leading to linear time complexity.
 */

function recursiveFactorial(n) {
    // Base case: return 1 for 0! 
    if (n == 0) {
        return 1; 
    }
    
    // Recursive case: return n multiplied by the factorial of (n - 1)
    return n * recursiveFactorial(n - 1); // O(n)
}




/**
 * Iterative Fibonacci Function
  
 * This function generates the Fibonacci series up to a specified number n using an iterative approach.
 * The Fibonacci sequence starts with the numbers 0 and 1, and each subsequent number is the sum of the two preceding ones.
  
 * How It Works:
          1. **Initialization**: 
             - An array `fib` is initialized with the first two Fibonacci numbers, 0 and 1.
          
          2. **Loop**: 
             - A `for` loop iterates from index 2 to n - 1.
             - In each iteration, the next Fibonacci number is calculated by summing the two previous numbers in the array:
               - `fib[i] = fib[i - 1] + fib[i - 2]`.
          
          3. **Return Result**: 
             - After the loop completes, the function returns the array `fib`, which contains the Fibonacci series up to n.
  
 * Time Complexity:
  - O(n): The function iterates through the loop n - 2 times to compute the Fibonacci numbers.
 */

function fibonacci(n) {
    const fib = [0, 1]; // Initialize the array with the first two Fibonacci numbers

    // Loop from index 2 to n - 1 to calculate subsequent Fibonacci numbers
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next Fibonacci number
    }

    return fib; // Return the array containing the Fibonacci series
}




/**
 * Recursive Fibonacci Function
  
 * This function calculates the n-th Fibonacci number using a straightforward recursive approach.
 * The Fibonacci sequence is defined such that each number is the sum of the two preceding ones, starting from 0 and 1.
  
 * How It Works:
          1. **Base Case**: 
             - If n is less than 2 (i.e., n = 0 or n = 1), the function returns n. 
               This handles the first two Fibonacci numbers directly.
          
          2. **Recursive Case**: 
             - For n ≥ 2, the function calls itself twice:
               - `recursiveFibonacci(n - 1)` computes the previous Fibonacci number.
               - `recursiveFibonacci(n - 2)` computes the Fibonacci number before that.
               - The results of these two calls are summed to produce the n-th Fibonacci number.
  
 * Time Complexity:
  - O(2^n): The time complexity of this recursive approach is exponential. 
  - Each call to the function generates two additional calls, leading to a binary tree of calls 
    that grows rapidly as n increases.
 */

function recursiveFibonacci(n) {
    // Base case: return n for the first two Fibonacci numbers (0 and 1)
    if (n < 2) {
        return n;
    }

    // Recursive case: return the sum of the two preceding Fibonacci numbers
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // O(2^n)
}




/**
 * isPrime Function
  
 * This function checks whether a given number n is a prime number using an efficient algorithm that leverages the properties of prime numbers.
  
 * How It Works:
          1. **Base Case**: 
             - The function first checks if n is less than 2. 
               Since prime numbers are defined as greater than 1, it returns false for any number less than 2.
          
          2. **Loop Through Possible Divisors**: 
             - The function then enters a `for` loop that iterates from 2 to the square root of n (inclusive).
               This is based on the mathematical principle that if n is divisible by any number greater than its square root,
               it must also be divisible by a number smaller than its square root.
          
          3. **Divisibility Check**: 
             - Within the loop, the function checks if n is divisible by i (i.e., if n % i === 0).
               If it finds any divisor, it returns false, indicating that n is not a prime number.
          
          4. **Return True**: 
             - If the loop completes without finding any divisors, the function returns true, confirming that n is a prime number.
  
 * Time Complexity:
  - O(√n): The time complexity of this function is O(√n). 
  - This efficiency arises because the function only checks for factors up to the square root of n,
    significantly reducing the number of iterations compared to checking all numbers up to n.
 */

function isPrime(n) {
    // Base case: return false for numbers less than 2
    if (n < 2) {
        return false;
    }

    // Loop through possible divisors from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Check if n is divisible by i
        if (n % i === 0) {
            return false; // n is not prime
        }
    }

    return true; // n is prime
}



/**
 * isPowerOfTwo Function
  
 * This function determines whether a given positive integer n is a power of two.
 * It employs a straightforward iterative approach to check the condition.
  
 * How It Works:
          1. **Base Case**: 
             - The function first checks if n is less than 1. 
               Since powers of two are defined for positive integers only (i.e., 1, 2, 4, 8, ...),
               it returns false for any non-positive integer.
         
          2. **Iterative Division**: 
             - The function enters a `while` loop that continues as long as n is greater than 1. 
               Within the loop:
               - It checks if n is odd using the condition `n % 2 !== 0`. 
                 If n is odd, it cannot be a power of two, and the function returns false.
               - If n is even, it divides n by 2 (`n /= 2`), effectively reducing the number 
                 to check if it can be expressed as \(2^k\).
          
          3. **Return True**: 
             - If the loop completes and n is reduced to 1, the function returns true, 
               indicating that the original number was indeed a power of two.
  
 * Time Complexity:
  - O(log n): The time complexity of this function is O(log n). 
  - This is because the function divides n by 2 in each iteration, leading to a logarithmic number of steps relative to the size of n.
 */

function isPowerOfTwo(n) {
    // Base case: return false for non-positive integers
    if (n < 1) {
        return false;
    }

    // Iteratively divide n by 2 while n is greater than 1
    while (n > 1) {
        // Check if n is odd
        if (n % 2 !== 0) {
            return false; // n is not a power of two
        }
        n /= 2; // Divide n by 2
    }

    return true; // n is a power of two
}




/**
 * isPowerOfTwoBitWise Function
  
 * This function checks whether a given positive integer n is a power of two using a bitwise operation.
 * This method is efficient and operates in constant time.
  
 * How It Works:
          1. **Base Case**: 
             - The function first checks if n is less than 1. 
               Since powers of two are defined for positive integers only (i.e., 1, 2, 4, 8, ...),
               it returns false for any non-positive integer.
          
          2. **Bitwise Operation**: 
             - The core of the function is the expression `(n & (n - 1)) === 0`. 
               This expression utilizes a property of binary numbers:
               - A number that is a power of two has exactly one bit set in its binary representation. 
                 For example:
                 - 1 (binary 0001)
                 - 2 (binary 0010)
                 - 4 (binary 0100)
                 - 8 (binary 1000)
          
               - When you subtract 1 from a power of two, all the bits lower than the set bit become 1. 
                 For instance:
                 - 4 − 1 = 3 (binary 0011)
          
               - Therefore, performing a bitwise AND between n and n−1 will yield zero if n is a power of two:
                 - 4 & 3 = 0100 & 0011 = 0000
          
          3. **Return Value**: 
             - If the result of the bitwise AND operation is zero, the function returns true, 
               indicating that n is a power of two. Otherwise, it returns false.
  
 * Time Complexity:
  - O(1): The time complexity of this function is O(1) because it performs a fixed number of operations 
    regardless of the size of n.
 */

function isPowerOfTwoBitWise(n) {
    // Base case: return false for non-positive integers
    if (n < 1) {
        return false;
    }

    // Check if n is a power of two using bitwise AND operation
    return (n & (n - 1)) === 0; // O(1)
}
