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
