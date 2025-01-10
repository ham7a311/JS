/*                                                                  JS Algorithms

Linear search and Binary search(itterative and recursive)

*/






/**
 * Linear Search Algorithm
 
 * This function implements a linear search to find a specific value in an array.
 * It checks each element sequentially until it finds the target value or reaches 
 * the end of the array.
 
 * How It Works:
      1. Start at the first element of the array.
      2. Compare each element with the target value.
      3. If a match is found, return the index of that element.
      4. If the end of the array is reached without finding the target, return -1.
 
 * Time Complexity:
     - O(n): The time complexity is linear, meaning the function may need to check  every element in the worst case, where n is the number of elements in the array.
 */

function linear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Target not found, return -1
}





/**
 * Iterative Binary Search Algorithm
  
 * This function implements the binary search algorithm to efficiently find the index 
 * of a target value within a sorted array. It uses a divide-and-conquer strategy, 
 * significantly reducing the number of comparisons needed compared to a linear search.
 
 * How It Works:
      1. **Initialization**: 
         - `leftIndex` is set to 0 (start of the array).
         - `rightIndex` is set to the last index of the array (`arr.length - 1`).
      
      2. **While Loop**: 
         - The loop continues as long as `leftIndex` is less than or equal to `rightIndex`.
      
      3. **Finding the Middle Index**: 
         - Calculate the middle index: `middleIndex = Math.floor((leftIndex + rightIndex) / 2)`.
      
      4. **Comparison**:
         - If the element at `middleIndex` equals the target, return `middleIndex`.
         - If the target is less than the element at `middleIndex`, update `rightIndex` to `middleIndex - 1`.
         - If the target is greater, update `leftIndex` to `middleIndex + 1`.
      
      5. **Return Value**: 
         - If the loop exits without finding the target, return -1, indicating the target is not present.
 
 * Time Complexity:
  - O(log n): The algorithm halves the search space with each iteration, making it much faster than linear search, especially for large datasets.
 */

function binary(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex; // Target found, return index
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1; // Search left half
        } else {
            leftIndex = middleIndex + 1; // Search right half
        }
    }

    return -1; // Target not found, return -1
}






/**
 * Recursive Binary Search Algorithm
  
 * This function implements a recursive binary search algorithm to find the index 
 * of a target value within a sorted array. It efficiently narrows down the search 
 * space by dividing it in half with each recursive call.
  
 * How It Works:
      1. **Function Definition**: 
         - `recursiveBinary` takes two parameters:
           - `arr`: The sorted array to search.
           - `target`: The value to find in the array.
      
      2. **Inner Search Function**: 
         - A helper function named `search` is defined within `recursiveBinary`, which performs the actual binary search. 
         - It takes four parameters:
         - `arr`: The array being searched.
         - `target`: The value being searched for.
         - `leftIndex`: The starting index of the current search range.
         - `rightIndex`: The ending index of the current search range.
      
      3. **Base Case**: 
         - The search function first checks if `leftIndex` is greater than `rightIndex`. 
         - If true, it means the target is not present, and the function returns -1.
      
      4. **Finding the Middle Index**: 
         - The middle index is calculated as `Math.floor((leftIndex + rightIndex) / 2)`, representing the midpoint of the current search range.
      
      5. **Comparison**:
         - If the element at `middleIndex` equals the target, return `middleIndex`.
         - If the target is less than the element at `middleIndex`, search the left half by calling `search(arr, target, leftIndex, middleIndex - 1)`.
         - If the target is greater, search the right half with `search(arr, target, middleIndex + 1, rightIndex)`.
      
      6. **Return Value**: 
         - The `recursiveBinary` function initiates the search by calling `search` with initial indices set to 0 and the length of the array. 
         - The result of the search is returned.
  
 * Time Complexity:
  - O(log n): Each recursive call reduces the size of the search space by half, making it efficient for large datasets.
 */

function recursiveBinary(arr, target) {
    function search(arr, target, leftIndex, rightIndex) {
        if (leftIndex > rightIndex) {
            return -1; // Target not found
        }
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex; // Target found
        }

        if (target < arr[middleIndex]) {
            return search(arr, target, leftIndex, middleIndex - 1); // Search left half
        } else {
            return search(arr, target, middleIndex + 1, rightIndex); // Search right half
        }
    }   

    return search(arr, target, 0, arr.length - 1); // O(log n)
}
