Object.myKeys = function (obj) {
    let final = [];

    if (typeof obj !== "object" || obj === null) {
        throw new TypeError(obj + " is not an object");
    }

    for (const keys in obj) {
        if (obj.hasOwnProperty(keys)) {
            final.push(keys);
        }
    }

    return final;
} 


Object.myValues = function (obj) {
    let final = [];

    if (typeof obj !== "object" || obj === null) {
        throw new TypeError(obj + " is not an object");
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            final.push(obj[key]);
        }
    }

    return final;
} 


Object.myEntries = function (obj) {
    let final = [];

    if (typeof obj !== "object" || obj === null) {
        throw new TypeError(obj + " is not an object");
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            final.push([key, obj[key]]);
        }
    }

    return final;
} 
