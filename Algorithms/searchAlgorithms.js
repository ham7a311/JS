/*                                                                  JS Algorithms

Linear search and Binary search(itterative and recursive)

*/


/* 
The linear search algorithm is a simple method for finding a specific value in an array. 
It works by checking each element one by one until it finds the target or reaches the end of the array.

How It Works

Start at the first element of the array.
Compare each element with the target value.
If a match is found, return the index of that element.
If the end of the array is reached without finding the target, return -1.

Time Complexity

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
