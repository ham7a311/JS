String.prototype.myBold = function () {
    return `<b>${this}</b>`;
}


String.prototype.myAnchor = function (name) {
    return `<a name="${name}">${this}</a>`;
}


String.prototype.myCharAt = function (index) {
    // Check if the index is out of bounds (negative or greater than the string length)
    if (index < 0 || index >= this.length) {
        return ""; // Return an empty string if the index is invalid
    }
    
    // Return the character at the specified index
    return this[index];
}


String.prototype.myConcat = function (...arguments) {
 // If no arguments are provided, return the original string
    if (arguments.length === 0) {
        return this;
    } 

 // Initialize result with the current string    
    let result = this;

// Iterate over each argument and concatenate it to the result
    for (let argument of arguments) {
        result += argument; // Append each argument to the result
    }
    
 // Return the concatenated string
    return result;
    
}


String.prototype.myEndsWith = function (str, position = 0) {
    
// If the string to check is longer than the original string, return false
    if (str.length > this.length) {
        return false;
    }

// Ensure the position is within valid bounds (0 to this.length)
    position = Math.max(0, Math.min(position, this.length));

// Loop through the characters of str to check if the original string ends with str
    for (let i = position; i < str.length; i++) {
    // Compare characters from the end of the original string with the characters of str
        if (this[position - str.length + i] !== str[i]) {
            return false; // Return false if any character does not match
        }
        
    }

// If all characters match, return true
    return true;
    
}


String.prototype.myIndexOf = function (str, position = 0) {
    
// Check if the input str is a string and if its length is greater than the calling string's length
    if (typeof str !== "string" || str.length > this.length) {
        // If not, return -1 indicating that the substring was not found
        return -1;
    }

// Ensure the starting position is within valid bounds (0 to this.length)
    position = Math.max(0, Math.min(position, this.length));

// Loop through the calling string starting from the specified position
    for (let i = position; i <= this.length; i++) {
        // Assume the substring is found
        let found = true;

    // Check each character of the substring str against the corresponding characters in the calling string
        for (let j = 0; j < str.length; j++) {
        // If any character does not match, set found to false and break out of the inner loop
            if (this[i + j] !== str[j]) {
                found = false;
                break;
            }
        }
        
        // If the substring was found, return the starting index
            if (found) {
                return i;
            }
    }

// If the loop completes without finding the substring, return -1
    return -1;
    
}


String.prototype.myRepeat = function (count) {
    
// Initialize an empty string to hold the repeated result
    let result = "";

// Check if the count is less than or equal to 0 or if count is not a number
    if (count <= 0 || isNaN(count)) {
    // If so, return an empty string as the result
        return "";
    }

// Loop from 0 to count (exclusive) to concatenate the string to result
    for (let i = 0; i < count; i++) {
    // Append the calling string (this) to the result in each iteration
        result += this;
    }

// Return the final repeated string
    return result;
    
} 


String.prototype.mySplit = function (delimiter) {
    
// If the delimiter is an empty string, return an array of individual characters
    if (delimiter === "") {
        return [...this]; // Spread the string into an array of characters
    } 

    // Initialize an empty array to hold the split parts of the string
    const result = [];
    
    // Initialize a variable to accumulate characters for the current segment
    let currentString = "";

    // Loop through each character in the calling string
    for (let i = 0; i < this.length; i++) {
        // Check if the current character matches the delimiter
        if (this[i] === delimiter) {
            // If it matches, push the accumulated currentString to the result array
            result.push(currentString); 
            
            // Reset currentString for the next segment
            currentString = "";  
        } else {
             // If it does not match, append the current character to currentString
            currentString += this[i]; 
        }
    }

    // After the loop, check if there is any remaining string to add to the result
    if (currentString) {
        result.push(currentString); // Push the last accumulated string if it's not empty
    }

    // Return the array containing the split parts of the string
    return result;

}


String.prototype.mySlice = function (start = 0, end = this.length) {

    // Adjust the start index if it is negative
    if (start < 0) {
        start = Math.max(this.length + start, 0);
    }
    
    // Adjust the end index if it is negative
    if (end < 0) {
        end = Math.max(this.length + end, 0);
    }

    // If the start index is greater than the end index, return an empty string
    if (start > end) {
        return "";
    }

    // Initialize an empty string to hold the sliced result
    let result = "";

    // Loop from the start index to the end index (exclusive)
    for (let i = start; i < end; i++) {
        // Append each character from the original string to the result
        result += this[i]; 
    }

    // Return the final sliced string
    return result;

}


String.prototype.myToUpperCase = function () {

     // Initialize an empty string to hold the result
    let result = "";

     // Loop through each character in the calling string
    for (let i = 0; i < this.length; i++) {
        // Check if the current character is a lowercase letter
        if (this[i] >= 'a' && this[i] <= 'z') {
            // Convert the lowercase letter to uppercase by adjusting its char code
            result += String.fromCharCode(this[i].charCodeAt(0) - 32);
        } else {
             // If it's not a lowercase letter, append it unchanged to the result
            result += this[i];
        }
    }

     // Return the final result string with all characters converted to uppercase
    return result;

}
