/**
 * Performs binary search on a sorted array to find the index of a target element.
 * @param {number[]} arr - Sorted array of numbers.
 * @param {number} target - The element to search for.
 * @returns {number} - The index of target if found; otherwise, -1.
 * 
 * Explanation:
 * Binary search works by repeatedly dividing the search interval in half.
 * We compare the target with the middle element. If equal, return mid index.
 * If target is greater, continue search in the right half.
 * If target is smaller, continue search in the left half.
 * If the search space is exhausted (left > right), target is not present.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * binarySearch([1,2,3,4,5], 3) // returns 2
 * binarySearch([1,2,3,4,5], 6) // returns -1
 * binarySearch([], 1)          // returns -1
 * binarySearch([1], 1)         // returns 0
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }

        if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

/**
 * Finds the first and last occurrence of a target in a sorted array
 * and returns the indices and the count of occurrences.
 * @param {number[]} arr - Sorted array of numbers.
 * @param {number} target - The element to find occurrences for.
 * @returns {[number, number, number]} - [firstIndex, lastIndex, count]
 *   Returns [-1, -1, 0] if target not found.
 * 
 * Explanation:
 * Uses two helper functions to find first and last occurrence using modified binary search.
 * For first occurrence, move right pointer to mid - 1 after finding target.
 * For last occurrence, move left pointer to mid + 1 after finding target.
 * Count is last - first + 1 if found.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * allOccurrences([1,2,2,2,3], 2)  // returns [1, 3, 3]
 * allOccurrences([1,2,3,4], 5)    // returns [-1, -1, 0]
 * allOccurrences([], 1)            // returns [-1, -1, 0]
 * allOccurrences([2,2,2], 2)      // returns [0, 2, 3]
 */
function allOccurrences(arr, target) {
    function firstOccurence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    function lastOccurence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const first = firstOccurence(arr, target);
    const last = lastOccurence(arr, target);

    if (first === -1 || last === -1) return [-1, -1, 0];

    return [first, last, last - first + 1];
}

/**
 * Finds the index at which the target should be inserted in the sorted array
 * to maintain the sorted order.
 * @param {number[]} arr - Sorted array.
 * @param {number} target - Target number to insert.
 * @returns {number} - The index to insert target.
 * 
 * Explanation:
 * Uses binary search to find target or where it would be inserted if not found.
 * Returns index where target is found or the insertion point (left).
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * insertPosition([1,3,5,6], 5)  // returns 2
 * insertPosition([1,3,5,6], 2)  // returns 1
 * insertPosition([1,3,5,6], 7)  // returns 4
 * insertPosition([], 0)          // returns 0
 */
function insertPosition(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

/**
 * Finds a peak element in the array and returns its value.
 * A peak element is one that is greater than its neighbors.
 * @param {number[]} arr - Input array.
 * @returns {number} - The value of a peak element.
 * 
 * Explanation:
 * Uses binary search to find a peak element by comparing mid with mid+1.
 * If arr[mid] > arr[mid + 1], peak lies on the left (including mid).
 * Otherwise, peak lies on the right.
 * The loop terminates when left == right, which points to a peak.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * peakElement([1,2,3,1])    // returns 3
 * peakElement([1,2,1,3,5,6,4]) // returns 6 or 5 (any peak)
 */
function peakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[mid + 1]) {
            right = mid;
        }else {
            left = mid + 1;
        }
    }

    return arr[left];
}

/**
 * Finds the index of a peak element in the array.
 * A peak element is greater than its neighbors.
 * @param {number[]} arr - Input array.
 * @returns {number} - The index of a peak element.
 * 
 * Explanation:
 * Similar to peakElement but returns the index instead of the value.
 * Binary search narrows down where the peak lies by comparing arr[mid] and arr[mid+1].
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * findPeakIndex([1,2,3,7,6,5]) // returns 3 (index of 7)
 * findPeakIndex([1,3,2])       // returns 1 (index of 3)
 */
function findPeakIndex(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }else {
            right = mid;
        }
    }

    return left;
}

/**
 * Searches for a target value in a rotated sorted array.
 * @param {number[]} arr - Rotated sorted array.
 * @param {number} target - Value to search.
 * @returns {number} - Index of target if found, else -1.
 * 
 * Explanation:
 * The array is sorted but rotated, so normal binary search won't work directly.
 * We check which half (left or right) is properly sorted.
 * If target lies in sorted half, reduce search to that half, else search other half.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * searchInRotatedSortedArray([4,5,6,7,0,1,2], 0) // returns 4
 * searchInRotatedSortedArray([4,5,6,7,0,1,2], 3) // returns -1
 */
function searchInRotatedSortedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }

        if(arr[left] <= arr[mid]) { // left half sorted
            if(arr[left] <= target && target <= arr[mid]) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }else { // right half sorted
            if(arr[mid] <= target && target <= arr[right]) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

/**
 * Finds the minimum element in a rotated sorted array.
 * @param {number[]} arr - Rotated sorted array.
 * @returns {number} - The minimum element in the array.
 * 
 * Explanation:
 * Minimum element is the only element where previous element is greater than it.
 * Using binary search, if mid element is greater than right element, min lies right.
 * Else min lies left including mid.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * findMinInRotatedSortedArray([3,4,5,1,2]) // returns 1
 * findMinInRotatedSortedArray([4,5,6,7,0,1,2]) // returns 0
 */
function findMinInRotatedSortedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

/**
 * Finds the starting and ending index of a given target in a sorted array.
 * @param {number[]} arr - Sorted array.
 * @param {number} target - Target value.
 * @returns {[number, number]} - [firstIndex, lastIndex], or [-1, -1] if not found.
 * 
 * Explanation:
 * Uses two binary searches to find first and last occurrences.
 * Similar approach to allOccurrences but returns only indices.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * searchForRange([5,7,7,8,8,10], 8)  // returns [3, 4]
 * searchForRange([5,7,7,8,8,10], 6)  // returns [-1, -1]
 */
function searchForRange(arr, target) {
    function firstOccurence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    function lastOccurence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if(arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const first = firstOccurence(arr, target);
    const last = lastOccurence(arr, target);

    return [first, last];
}

/**
 * Finds the integer square root of a non-negative integer x.
 * The integer square root is the floor of the exact square root.
 * @param {number} x - Non-negative integer.
 * @returns {number} - Integer square root of x.
 * 
 * Explanation:
 * Uses binary search between 0 and x.
 * If mid * mid === x, return mid.
 * If mid * mid < x, search right half.
 * Else search left half.
 * Returns the integer floor of sqrt.
 * 
 * Time Complexity: O(log x)
 * Space Complexity: O(1)
 * 
 * Test cases:
 * findIntegerSquareRoot(4)  // returns 2
 * findIntegerSquareRoot(8)  // returns 2
 * findIntegerSquareRoot(0)  // returns 0
 */
function findIntegerSquareRoot(x) {
    let left = 0;
    let right = x;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(mid * mid === x) {
            return mid;
        } else if(mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
