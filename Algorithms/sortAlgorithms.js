


/*                                                                  JS Algorithms

Sorting Algorithms

*/


/**
 * Bubble Sort Algorithm
  
 * This function implements the Bubble Sort algorithm to sort an array in ascending order.
 * Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * The process is repeated until no swaps are needed, indicating that the array is sorted.
  
 * How It Works:
    1. **Initialization**: 
       - A variable `swapped` is used to track whether any swaps were made during an iteration.
    
    2. **Outer Loop**: 
       - The algorithm continues looping until no swaps are made in a complete pass through the array.
    
    3. **Inner Loop**: 
       - For each pass, the inner loop iterates through the array elements (except the last one).
       - It compares each element with the next one.
    
    4. **Comparison and Swapping**:
       - If the current element is greater than the next element, they are swapped.
       - The elements are destructured for clarity during the swap operation.
       - The `swapped` variable is set to true to indicate that a swap occurred.
    
    5. **Repeat**: 
       - The process repeats until a complete pass is made without any swaps, indicating the array is sorted.

 * Time Complexity:
  - O(n^2): In the worst case, the algorithm may need to compare and shift elements for each element in the array, 
            resulting in a quadratic time complexity as the number of elements increases.
 */

function bubbleSort(arr) {
    let swapped; // Variable to track if any swaps were made during the iteration

    // Continue looping until no swaps are made in a complete pass
    do {
        swapped = false; // Initially set swapped to false for this pass

        // Loop through the array elements, except the last one
        for (let i = 0; i < arr.length - 1; i++) {
            // Compare the current element with the next element
            if (arr[i] > arr[i + 1]) {
                // Destructure the current and next elements for clarity
                let [current, next] = [arr[i], arr[i + 1]];

                // Swap the elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [next, current];

                // Set swapped to true to indicate a swap occurred
                swapped = true;
            }
        }
    } while (swapped); // Repeat the process if a swap was made

    // The array is now sorted in ascending order
}



/**
 * Insertion Sort Algorithm
  
 * This function implements the Insertion Sort algorithm to sort an array in ascending order.
 * Insertion Sort builds the final sorted array one item at a time by comparing each new element with the already sorted elements and inserting it into the correct position.
  
 * How It Works:
    1. **Initialization**: 
       - Start with the second element of the array, as the first element is assumed to be sorted.
    
    2. **Outer Loop**: 
       - Iterate through the array starting from the second element.
    
    3. **Inner Loop**: 
       - For each element, compare it with the elements in the sorted portion of the array.
    
    4. **Shifting Elements**:
       - Shift all elements in the sorted portion that are greater than the current element one position to the right.
    
    5. **Insertion**: 
       - Insert the current element into its correct position in the sorted portion.
  
 * Time Complexity:
  - O(n^2): In the worst case, the algorithm may need to compare and shift elements for each element in the array, 
            resulting in a quadratic time complexity as the number of elements increases.
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i]; // Current element to be inserted
        let se = i - 1; // Index of the last sorted element
        
        // Shift elements of the sorted portion that are greater than the current element
        while (se >= 0 && arr[se] > nti) {
            arr[se + 1] = arr[se]; // Move the larger element one position to the right
            se -= 1; // Move to the next element in the sorted portion
        }
        
        // Insert the current element into its correct position
        arr[se + 1] = nti;
    }
}



/**
 * Quicksort Algorithm
 * 
 * This function implements the Quicksort algorithm to sort an array in ascending order.
 * Quicksort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
   according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
  
 * How It Works:
    1. **Base Case**: 
       - If the array has fewer than two elements, it is already sorted, so return it.
    
    2. **Select a Pivot**: 
       - Choose the last element of the array as the pivot.
    
    3. **Partitioning**: 
       - Initialize two empty arrays: `left` for elements less than the pivot and 
         `right` for elements greater than or equal to the pivot.
    
    4. **Iterate and Compare**: 
       - Loop through the array (excluding the pivot) and compare each element with the pivot.
       - If an element is less than the pivot, push it to the `left` array; otherwise, push it 
         to the `right` array.
    
    5. **Recursive Sorting**: 
       - Recursively apply the same logic to the `left` and `right` arrays.
    
    6. **Combine**: 
       - Return the sorted `left` array, the pivot, and the sorted `right` array combined.
  
 * Time Complexity:
  - O(n log n) on average: The algorithm efficiently partitions the array into smaller sub-arrays.
  - O(n^2) in the worst case: This occurs when the smallest or largest element is always chosen as the pivot, leading to unbalanced partitions.
 */

function quickSort(arr) {
    if (arr.length < 2) {
        return arr; // Base case: array is already sorted
    }
    let pivot = arr[arr.length - 1]; // Select the last element as the pivot
    let left = []; // Array for elements less than the pivot
    let right = []; // Array for elements greater than or equal to the pivot
    
    // Partitioning the array into left and right sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Push to left if less than pivot
        } else {
            right.push(arr[i]); // Push to right if greater than or equal to pivot
        }
    }

    // Recursively sort the left and right sub-arrays and combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}




/**
 * Merge Sort Algorithm
  
 * This function implements the Merge Sort algorithm to sort an array in ascending order.
 * Merge Sort is a divide-and-conquer algorithm that recursively divides the input array into smaller subarrays, sorts those subarrays,
    and then merges them back together to produce a sorted array.
  
 * How It Works:
    1. **Base Case**: 
       - If the input array has fewer than two elements, it is already sorted, so return it.
    
    2. **Divide**: 
       - Calculate the midpoint of the array and split it into two halves: `left` and `right`.
    
    3. **Recursive Sorting**: 
       - Recursively call `mergeSort` on both halves to sort them independently.
    
    4. **Merge**: 
       - Merge the two sorted halves back together using the `merge` function.
    
    5. **Combining**: 
       - The `merge` function compares the elements of the two arrays and combines them into a 
         single sorted array.
  
 * Time Complexity:
  - O(n log n): The algorithm divides the array into halves (log n levels) and merges them back together (O(n) time for each level),
                 resulting in an overall time complexity of O(n log n).
 */

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr; // Base case: array is already sorted
    }

    const mid = Math.floor(arr.length / 2); // Calculate the midpoint
    const left = arr.slice(0, mid); // Split the array into left half
    const right = arr.slice(mid); // Split the array into right half

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));

   
  // Merge function to combine two sorted arrays
    function merge(leftArray, rightArray) {
        const sortedArray = []; // Array to hold the merged result

        // Compare elements from both arrays and merge them in sorted order
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) { 
                sortedArray.push(leftArray.shift()); // Push smaller element to sortedArray
            } else {
                sortedArray.push(rightArray.shift()); // Push smaller element to sortedArray
            }
        }

        // Concatenate any remaining elements from both arrays
        return [...sortedArray, ...leftArray, ...rightArray];
    }
}
