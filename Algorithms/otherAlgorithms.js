


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



/**
 * Palindrome Checker Algorithm
  
 * This function checks whether a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
  
 * How It Works:
      1. **Initialization**: 
         - A variable `reversed` is initialized as an empty string to store the reversed version of the input string.
      
      2. **Looping**: 
         - A `for` loop is used to iterate through the input string in reverse order, starting from the last character.
      
      3. **Appending Characters**:
         - In each iteration, the current character is appended to the `reversed` string.
      
      4. **Comparison**: 
         - After the loop completes, the function checks if the `reversed` string is equal to the original input string.
      
      5. **Return Result**: 
         - The function returns `true` if the input string is a palindrome (i.e., it reads the same backward), and `false` otherwise.

 * Time Complexity:
  - O(n): The function iterates through the input string once to create the reversed string, 
          where n is the length of the string, resulting in linear time complexity.
 */

function palindrome(str) {
    let reversed = ""; // Initialize an empty string to hold the reversed result

    // Loop through the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; // Append the current character to the reversed string
    }

    return reversed === str; // Return true if the reversed string is equal to the original string
}



/**
 * Maximum Character Frequency Algorithm
 
 * This function finds the character that appears most frequently in a given string.
 * If there are multiple characters with the same maximum frequency, it returns the first one encountered.
 
 * How It Works:
    1. **Initialization**:
       - An empty object `obj` is created to store the frequency of each character.
       - A variable `count` is initialized to keep track of the occurrences of each character.
   
    2. **Counting Characters**:
       - A `for` loop iterates through each character in the input string `str`.
       - If the character already exists in `obj`, the count is incremented; otherwise, it is set to 1.
       - The character's count is updated in the `obj`.
   
    3. **Finding Maximum Frequency**:
       - Two variables, `maxCount` and `char`, are initialized to track the highest frequency and the corresponding character.
       - A `for...in` loop iterates through the keys in `obj`.
       - If the current character's count is greater than `maxCount`, both `maxCount` and `char` are updated.
   
    4. **Return Result**:
       - The function returns the character that has the highest frequency in the input string.
 
 * Time Complexity:
  - O(n): The function iterates through the input string once to count character frequencies and then iterates through the object to find the maximum frequency, resulting in linear time complexity.
 */
function maxChar(str) {
    let obj = {}; // Initialize an empty object to hold character counts
    let count = 0; // Initialize count for character occurrences

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the character already exists in the object
        if (obj[str[i]]) {
            count++; // Increment count if character exists
        } else {
            count = 1; // Reset count to 1 for a new character
        }
        obj[str[i]] = count; // Update the character count in the object
    }

    let maxCount = 0; // Variable to track the maximum count
    let char = ""; // Variable to store the character with the maximum count
    
    // Iterate through the character count object to find the maximum frequency
    for (const key in obj) {
        // Check if the current character's count is greater than the maxCount
        if (maxCount < obj[key]) {
            maxCount = obj[key]; // Update maxCount
            char = key; // Update char to the current character
        }
    }

    return char; // Return the character with the highest frequency
}
