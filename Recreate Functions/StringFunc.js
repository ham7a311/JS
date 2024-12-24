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
    if (typeof str !== "string" || str.length > this.length) {
        return -1;
    }

    position = Math.max(0, Math.min(position, this.length));

    for (let i = position; i <= this.length; i++) {
        let found = true;
        for (let j = 0; j < str.length; j++) {
            if (this[i + j] !== str[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }

    return -1;
}


String.prototype.myRepeat = function (count) {
    let result = "";

    if (count <= 0 || isNaN(count)) {
        return "";
    }

    for (let i = 0; i < count; i++) {
        result += this;
    }

    return result;
} 


String.prototype.mySplit = function (delimiter) {
    if (delimiter === "") {
        return [...this];
    } 

    const result = [];

    let currentString = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === delimiter) {
            result.push(currentString);
            currentString = "";
        } else {
            currentString += this[i];
        }
    }

    if (currentString) {
        result.push(currentString);
    }

    return result;

}


String.prototype.mySlice = function (start = 0, end = this.length) {

    if (start < 0) {
        start = Math.max(this.length + start, 0);
    }

    if (end < 0) {
        end = Math.max(this.length + end, 0);
    }

    if (start > end) {
        return "";
    }

    let result = "";

    for (let i = start; i < end; i++) {
        result += this[i];
    }

    return result;

}


String.prototype.myToUpperCase = function () {
    let result = "";

    for (let i = 0; i < this.length; i++) {
        if (this[i] >= 'a' && this[i] <= 'z') {
            result += String.fromCharCode(this[i].charCodeAt(0) - 32);
        } else {
            result += this[i];
        }
    }

    return result;
}
