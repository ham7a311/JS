/*                                                                  JS Algorithms

Linear search and Binary search(itterative and recursive)

*/






/* 
1. Linear Search  ===> Itterative Algorithm
The linear search algorithm is a simple method for finding a specific value in an array. 
It works by checking each element one by one until it finds the target or reaches the end of the array.

How It Works:

Start at the first element of the array.
Compare each element with the target value.
If a match is found, return the index of that element.
If the end of the array is reached without finding the target, return -1.

Time Complexity:
    The time complexity is O(n), where n is the number of elements in the array. This means it may need to check every element in the worst case.
*/
function linear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; //  O(n)
}





/* 
2. (1) Binary Search  ===> Itterative Algorithm   ===> Binary search works with sorted array only
The binary function implements the binary search algorithm to efficiently find the index of a target value within a sorted array. This method is based on the divide-and-conquer strategy, which significantly reduces the number of comparisons needed compared to a linear search.
How It Works:

Initialization: The function begins by initializing two pointers:
        leftIndex is set to 0, representing the start of the array.
        rightIndex is set to the last index of the array (arr.length - 1).

While Loop: The function enters a while loop that continues as long as leftIndex is less than or equal to rightIndex. This loop will repeatedly narrow down the search space.


Finding the Middle Index: Inside the loop:
    The middle index is calculated using Math.floor((leftIndex + rightIndex) / 2). This gives the index of the middle element of the current search range.


Comparison:

    If the element at middleindex is equal to the target, the function returns middleindex, indicating that the target has been found.
    If the target is less than the element at middleindex, it means the target must be in the left half of the array. Therefore, rightIndex is updated to middleindex - 1.
    If the target is greater than the element at middleindex, it indicates that the target is in the right half of the array, so leftIndex is updated to middleindex + 1.


Return Value: 
    If the loop exits without finding the target, the function returns -1, indicating that the target is not present in the array.


Time Complexity:
    The time complexity of this function is O(log⁡ n). This efficiency arises because the algorithm halves the search space with each iteration, making it much faster than a linear search, especially for large datasets.
*/
function binary(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1; // O(log n)
}






/* 
2. (2) Binary Search  ===> Recursive Algorithm   ===> Binary search works with sorted array only
The recursiveBinary function implements a recursive binary search algorithm to find the index of a target value within a sorted array. This method efficiently narrows down the search space by dividing it in half with each recursive call.
How It Works:

Function Definition: The recursiveBinary function takes two parameters:
        arr: The sorted array in which to search for the target.
        target: The value to search for in the array.


Inner Search Function: Inside recursiveBinary, a helper function named search is defined, which performs the actual binary search. It takes four parameters:
        arr: The array being searched.
        target: The value being searched for.
        leftIndex: The starting index of the current search range.
        rightIndex: The ending index of the current search range.



Base Case: 
    The first step in the search function checks if leftIndex is greater than rightIndex. If this condition is true, it means the target is not present in the array, and the function returns -1.

Finding the Middle Index: 
    The middle index is calculated using Math.floor((leftIndex + rightIndex) / 2). This index represents the midpoint of the current search range.


Comparison:

    If the element at middleindex is equal to the target, the function returns middleindex, indicating that the target has been found.
    If the target is less than the element at middleindex, the search continues in the left half of the array by recursively calling search with updated indices: search(arr, target, leftIndex, middleindex - 1).
    If the target is greater than the element at middleindex, the search continues in the right half of the array with the call: search(arr, target, middleindex + 1, rightIndex).

Return Value: 
    The recursiveBinary function initiates the search by calling search with the initial indices set to 0 and the length of the array. The result of the search is returned.

Time Complexity:
    The time complexity of this function is O(log⁡ n). Because each recursive call reduces the size of the search space by half.
*/
function recursiveBinary(arr, target) {
    function search(arr, target, leftIndex, rightIndex) {
        if (leftIndex > rightIndex) {
            return -1;
        }
        let middleindex = Math.floor((leftIndex + rightIndex) / 2);
    
        if (target === arr[middleindex]) {
            return middleindex;
        }
    
        if (target < arr[middleindex]) {
            return search(arr, target, leftIndex, middleindex - 1);
        } else {
            return search(arr, target, middleindex + 1, rightIndex);
        }
    }   

    return search(arr, target, 0, arr.length); // O(log n)
}
