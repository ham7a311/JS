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
    return this + str;
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
        };
    };

    return -1;
}
