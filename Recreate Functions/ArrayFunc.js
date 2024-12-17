Array.prototype.myPop = function () {
    return this.splice(this.length - 1, 1)[0];
}


Array.prototype.myShift = function () {
    return this.splice(0, 1)[0];
}


Array.prototype.myPush = function (...elements) {

    let currentLength = this.length;
    
    for (let i = 0; i < elements.length; i++) {
        this[currentLength + i] = elements[i];
    }
    this.length = currentLength + elements.length;
    return this.length;
}


Array.prototype.myUnshift = function (...elements) {
    let currentLength = this.length;

    for (let i = currentLength - 1; i >= 0; i--) {
        this[i + elements.length] = this[i];
    }

    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }

    this.length = currentLength + elements.length;
    return this.length;
}


Array.prototype.myFill = function (value, start = 0, end = this.length) {
    if (start < 0) {
        start += this.length;
    }

    if (end < 0) {
        end += this.length;
    }

    start = Math.max(start, 0);
    end = Math.min(end, this.length);



    if (start < end) {
        for (let i = start; i < end; i++) {
            this[i] = value;
        }
    }

    return this;
    
}


Array.prototype.myIncludes = function (value, start) {
    if (start < 0) {
        start += this.length;
    }

    if (start === undefined) {
        start = 0;
    }

    start = Math.max(start, 0);
    start = Math.min(start, this.length);

    for (let i = start; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }

    return false;

}


Array.prototype.myToString = function () {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(String(this[i]));
    }

    return result.join("");
}


Array.prototype.myFlat = function (depth = 1) {
    let result = [];

    if (this.length === 0) {
        return result;
    }

    if (depth <= 0) {
        return this.slice();
    }

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            result = result.concat(this[i].myFlat(depth - 1));
        } else {
            result.push(this[i]);
        }
    }

    return result;
}


Array.prototype.myReverse = function () {
    let leftIndex = 0;
    let rightIndex = this.length - 1;

    while (leftIndex < rightIndex) {
        let temp = this[leftIndex];
        this[leftIndex] = this[rightIndex];
        this[rightIndex] = temp;

        leftIndex++;
        rightIndex--;
    }

    return this;
}


Array.prototype.myJoin = function (seperator = ',') {
    let result = "";

    for (let i = 0; i < this.length; i++) {  
        if (i > 0) {
            result += seperator;
        }
        result += String(this[i]);
    }

    return result;
}


Array.myFrom = function (iterable, mapFunc, thisArg) {
    let result = [];
    let count = 0;

    if (typeof iterable[Symbol.iterator] !== "function") {
        throw new Error("Uncaught TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))");
    }

    for (let el of iterable) {
        if (mapFunc) {
            result.push(mapFunc.call(thisArg, el, count, iterable));
            
        } else {
            result.push(el);
        }
        count++;
    } 

    return result;
}


Array.prototype.myCopyWithin = function (target, start = 0, end = this.length) {
    target = (target < 0) ? Math.max(0, target + this.length) : Math.min(target, this.length);
    start = (start < 0) ? Math.max(0, start + this.length) : Math.min(start, this.length);
    end = (end < 0) ? Math.max(0, end + this.length) : Math.min(end, this.length);


    if (target >= this.length || start >= this.length || start >= end) {
        return this;
    }

    if (target < start) {
        for (let i = start; i < end; i++) {
            this[target++] = this[i];
        }
    } else {
        const count = Math.min(end - start, this.length - target);
        for (let i = count - 1; i >= 0; i--) {
            this[target + i] = this[start + i];
        }
    }
    

    return this;
}
