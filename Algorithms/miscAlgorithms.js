


/*                                                                  JS Algorithms

Misc Problems and Algorithms

*/


/**
 * Cartesian Product Function

 * This function computes the Cartesian product of two arrays, `arr1` and `arr2`.
 * The Cartesian product is a mathematical operation that returns a set of all ordered pairs 
 * (a, b) where `a` is an element from `arr1` and `b` is an element from `arr2`.
 * This function generates a new array containing these pairs.

 * How It Works:
    1. **Initialization**: 
       - An empty array `result` is created to store the pairs generated from the Cartesian product.

    2. **Outer Loop**: 
       - The outer loop iterates through each element of `arr1` using the index `i`.

    3. **Inner Loop**: 
       - For each element in `arr1`, the inner loop iterates through each element of `arr2` using the index `j`.

    4. **Pair Creation**:
       - Inside the inner loop, a new array containing the current elements from `arr1` and `arr2` (`[arr1[i], arr2[j]]`) is created.
       - This pair is then pushed into the `result` array.

    5. **Return Result**: 
       - After both loops complete, the `result` array, which now contains all possible pairs, is returned.

 * Time Complexity:
  - O(mn): The time complexity is linear with respect to the product of the lengths of the two arrays, 
           where `m` is the length of `arr1` and `n` is the length of `arr2`. 
           This is because each element of `arr1` is paired with each element of `arr2`.
 */

function cartesian(arr1, arr2) {
    // Initialize an empty array to store the result of the Cartesian product
    const result = [];

    // Outer loop to iterate through each element of the first array (arr1)
    for (let i = 0; i < arr1.length; i++) {
        // Inner loop to iterate through each element of the second array (arr2)
        for (let j = 0; j < arr2.length; j++) {
            // Create a pair consisting of the current elements from arr1 and arr2
            // and push it into the result array
            result.push([arr1[i], arr2[j]]);
        }
    } 

    // Return the result array containing all pairs from the Cartesian product
    return result; 
}



/**
 * Climbing Staircase Function
 
 * This function calculates the number of distinct ways to climb a staircase with a given number of steps, `num`. You can climb either 1 step or 2 steps at a time.
  The function uses a dynamic programming approach to build up the solution iteratively.
 
 * How It Works:
    1. **Initialization**: 
       - An array `ways` is created with the first two values: `1` and `2`.
         - `ways[0]` (1) represents the number of ways to climb to the first step.
         - `ways[1]` (2) represents the number of ways to climb to the second step.
   
    2. **Iterative Calculation**: 
       - A loop starts from the third step (index 2) and continues to the `num`-th step.
       - For each step `i`, the number of ways to reach that step is calculated as the sum of the ways to reach the two previous steps:
           - `ways[i] = ways[i - 1] + ways[i - 2]`.
   
    3. **Return Result**: 
       - After the loop completes, the function returns `ways[num - 1]`,  which contains the total number of ways to reach the `num`-th step.
 
 * Time Complexity:
  - O(n): The time complexity is linear with respect to `num`,  as the function iterates through the steps once to compute the number of ways.
 */


function climbingStaircase(num) {
    // Initialize an array to store the number of ways to climb to each step
    // The first two values represent the base cases:
    // 1 way to climb to the first step, and 2 ways to climb to the second step
    const ways = [1, 2];

    // Loop from the 3rd step (index 2) to the num-th step
    for (let i = 2; i < num; i++) {
        // The number of ways to reach the current step (ways[i]) is the sum of the ways
        // to reach the two previous steps (ways[i - 1] and ways[i - 2])
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    // Return the number of ways to reach the num-th step
    return ways[num - 1]; // O(n): The time complexity is linear with respect to num
}


/**
 * Tower of Hanoi Function
 
 * This function solves the Tower of Hanoi puzzle, which involves moving a stack of disks from one rod to another, using a third rod as an auxiliary.
   The puzzle follows these rules:
    1. Only one disk can be moved at a time.
    2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
    3. No larger disk may be placed on top of a smaller disk.
 
 * How It Works:
    1. **Base Case**: 
       - If there is only one disk (`num === 1`), the function prints the move 
         from the `fromRod` to the `toRod` and returns.
   
    2. **Recursive Case**: 
       - For more than one disk, the function follows these steps:
         - First, it recursively moves the top `num - 1` disks from the `fromRod` 
           to the `usingRod`, using the `toRod` as an auxiliary.
         - Then, it moves the largest disk (`num`) directly from the `fromRod` to 
           the `toRod`.
         - Finally, it recursively moves the `num - 1` disks from the `usingRod` 
           to the `toRod`, using the `fromRod` as an auxiliary.
 
 * Time Complexity:
  - O(2^n): The time complexity is exponential with respect to the number of disks, where `n` is the number of disks. This is because each disk requires 
            two recursive calls, leading to a total of `2^n - 1` moves.
 */

function towerOfHanoi(num, fromRod, toRod, usingRod) {
    // Base case: If there is only one disk, move it directly from the source rod to the destination rod
    if (num === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return; // Exit the function after moving the disk
    }

    // Recursive case: Move the top num - 1 disks from the source rod to the auxiliary rod
    towerOfHanoi(num - 1, fromRod, usingRod, toRod);
    
    // Move the largest disk from the source rod to the destination rod
    console.log(`Move disk ${num} from ${fromRod} to ${toRod}`);
    
    // Move the num - 1 disks from the auxiliary rod to the destination rod
    towerOfHanoi(num - 1, usingRod, fromRod, toRod);
}
