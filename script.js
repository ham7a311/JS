/* JavaScript function problems categorized by skill level: beginner, intermediate, and expert.
Beginner Level Problems
1. Greet Function: Create a function that takes a name as an argument and returns a greeting message.
2. Sum Function: Write a function that takes two numbers and returns their sum.
3. Is Even Function: Develop a function that checks if a number is even.
4. Reverse String: Create a function that takes a string and returns it reversed.
5. Count Vowels: Write a function that counts the number of vowels in a given string.
Intermediate Level Problems
1. Palindrome Checker: Write a function that checks if a string is a palindrome.
2. Longest Word Finder: Create a function that finds the longest word in a string.
3. String Combinations: Develop a function that generates all combinations of characters in a string.
4. Alphabetical Order: Write a function that sorts the letters of a string in alphabetical order.
5. Discount Calculator: Create a function that calculates the final price after applying a discount.
Expert Level Problems
1. Fibonacci Sequence: Write a function that generates the Fibonacci sequence up to a specified number and sums all odd numbers.
2. Memoization: Implement a memoized function to calculate the nth Fibonacci number.
3. Flatten an Array: Create a function that flattens a nested array into a single array.
4. Deep Clone an Object: Write a function that performs a deep clone of a given object.
5. Event Emitter: Implement a simple event emitter class that allows registering and emitting events.
These problems will help you practice and enhance your JavaScript function skills across different levels of complexity. */




function greet(name) {
    return `Hello ${name}`;
}


function sum(num1, num2) {
    return num1 + num2;
};

function isEven(num) {
    return num % 2 === 0;
}

function reversedString(str) {
    return str.split("").reverse().join("");
}

function countVowel(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        if (vowels.includes(str[i])) {
            count++
        };
    };
    return count;

}


function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        return true;
    } else {
        return false;
    };
}


function longestWord(str) {
    let currentWord = "";
    let longestWord = "";
    for (let i = 0; i <= str.length; i++) {
    
        if (str[i] === " " || i === str.length) {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        } else {
            currentWord += str[i];
        };

    };

    return longestWord.length;
}
