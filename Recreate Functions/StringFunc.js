String.prototype.myBold = function () {
    return `<b>${this}</b>`;
}


String.prototype.myAnchor = function (name) {
    return `<a name="${name}">${this}</a>`;
}


String.prototype.myCharAt = function (index) {

    if (index < 0 || index >= this.length) {
        return "";
    }

    return this[index];
}


String.prototype.myConcat = function (str) {
    if (arguments.length === 0) {
        return this;
    } 

    let result = this;

    for (let argument of arguments) {
        result += argument;
    }

    return result;
}


String.prototype.myEndsWith = function (str, position = 0) {
    if (str.length > this.length) {
        return false;
    }

    position = Math.max(0, Math.min(position, this.length));

    for (let i = position; i < str.length; i++) {
        if (this[position - str.length + i] !== str[i]) {
            return false;
        }
        
    }

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
