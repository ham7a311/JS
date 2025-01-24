


/*                                                                  JS Algorithms

Other Important Algorithms

*/



/**
 * Reverse String Algorithm
  
 * This function takes a string as input and returns a new string that is the reverse of the input string.
 * The algorithm iterates through the input string from the last character to the first, appending each character to a new string.
  
 * How It Works:
    1. **Initialization**: 
       - A variable `reversed` is initialized as an empty string to store the reversed result.
    
    2. **Looping**: 
       - A `for` loop is used to iterate through the input string in reverse order, starting from the last character.
    
    3. **Appending Characters**:
       - In each iteration, the current character is appended to the `reversed` string.
    
    4. **Return Result**: 
       - After the loop completes, the `reversed` string is returned as the output.

 * Time Complexity:
  - O(n): The function iterates through the input string once, where n is the length of the string, 
          resulting in linear time complexity.
 */
function reverse(str) {
    let reversed = ""; // Initialize an empty string to hold the reversed result

    // Loop through the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; // Append the current character to the reversed string
    }

    return reversed; // Return the reversed string
}



/**
 * Reverse Integer Algorithm
  
 * This function takes an integer as input and returns a new integer that is the reverse of the input integer.
 * The algorithm converts the integer to a string, iterates through it from the last character to the first, and constructs the reversed integer.
  
 * How It Works:
    1. **Initialization**: 
       - A variable `reversed` is initialized as an empty string to store the reversed result.
    
    2. **Conversion**: 
       - The input integer is converted to a string using `toString()` to facilitate character manipulation.
    
    3. **Looping**: 
       - A `for` loop is used to iterate through the string representation of the integer in reverse order.
    
    4. **Appending Characters**:
       - In each iteration, the current character is appended to the `reversed` string.
    
    5. **Return Result**: 
       - After the loop completes, the `reversed` string is converted back to a number using `Number()` and returned.

 * Time Complexity:
  - O(n): The function iterates through the string representation of the integer once, where n is the number of digits in the integer, 
          resulting in linear time complexity.
 */
function reverseInt(int) {
    let reversed = ""; // Initialize an empty string to hold the reversed result

    let integer = int.toString(); // Convert the integer to a string

    // Loop through the string representation of the integer in reverse order
    for (let i = integer.length - 1; i >= 0; i--) {
        reversed = reversed + integer[i]; // Append the current character to the reversed string
    }

    return Number(reversed); // Convert the reversed string back to a number and return it
}
