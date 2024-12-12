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
