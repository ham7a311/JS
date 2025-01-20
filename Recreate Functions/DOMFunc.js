Document.prototype.myGetElementByTagName = function (tagName) {
    const result = []; // Array to hold matching elements
    const lowerCaseTagName = tagName.toLowerCase(); // Convert tagName to lowercase for case-insensitive comparison

    function traverse(node) {
        // Traverse child nodes recursively
        for (let child of node.children) {
            if (child.tagName.toLowerCase() === lowerCaseTagName) {
                result.push(child); // Add matching element to the result array
            }
            traverse(child); // Recurse on the child
        }
    }

    traverse(this); // Start traversal from the current document context
    return result; // Return the array of matching elements

} 




Document.prototype.myGetElementsByClassName = function (className) {
    
    let LowerCaseClassName = className.toLowerCase();

    let result = [];

    function traverse(node) {
        // Traverse child nodes recursively
        for (let child of node.children) {
            if (child.className.toLowerCase() === LowerCaseClassName) {
                result.push(child); // Add matching element to the result array
            }
            traverse(child); // Recurse on the child
        }
    }

    traverse(this); // Start traversal from the current document context

    return result;
} 



Document.prototype.myGetElementById = function (id) {
    
    let LowerCaseId = id.toLowerCase();

    let result = [];

    function traverse(node) {
        // Traverse child nodes recursively
        for (let child of node.children) {
            if (child.id.toLowerCase() === LowerCaseId) {
                result.push(child); // Add matching element to the result array
            }
            traverse(child); // Recurse on the child
        }
    }

    traverse(this); // Start traversal from the current document context

    return result[0];
} 

