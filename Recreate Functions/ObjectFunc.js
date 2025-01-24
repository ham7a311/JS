


Object.myKeys = function (obj) {
    
 // Initialize an empty array to hold the keys
    let final = [];

    // Check if the input is an object and not null
    if (typeof obj !== "object" || obj === null) {
        // If not, throw a TypeError with a descriptive message
        throw new TypeError(obj + " is not an object");
    }

     // Iterate over each key in the object
    for (const keys in obj) {
        // Check if the key is an own property of the object
        if (obj.hasOwnProperty(keys)) {
            // If it is, push the key into the final array
            final.push(keys); 
        }
    }

    // Return the array of keys
    return final;
    
} 


Object.myValues = function (obj) {

 // Initialize an empty array to hold the values    
    let final = [];

    // Check if the input is an object and not null
    if (typeof obj !== "object" || obj === null) {
        // If not, throw a TypeError with a descriptive message
        throw new TypeError(obj + " is not an object");
    }

     // Iterate over each key in the object
    for (const key in obj) {
        // Check if the key is an own property of the object
        if (obj.hasOwnProperty(key)) {
            // If it is, push the value associated with the key into the final array
            final.push(obj[key]);
        }
    }

     // Return the array of values
    return final;
    
} 


Object.myEntries = function (obj) {
    
// Initialize an empty array to hold the values
    let final = [];

    // Check if the input is an object and not null
    if (typeof obj !== "object" || obj === null) {
        // If not, throw a TypeError with a descriptive message
        throw new TypeError(obj + " is not an object");
    }

    // Iterate over each key in the object
    for (const key in obj) {
         // Check if the key is an own property of the object
        if (obj.hasOwnProperty(key)) {
            // If it is, push an array containing the key and its corresponding value into the final array
            final.push([key, obj[key]]);
        }
    }

      // Return the array of key-value pairs
    return final;
    
} 
