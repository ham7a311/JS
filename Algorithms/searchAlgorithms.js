/*                                                                  JS Algorithms

Linear search and Binary search(itterative and recursive)

*/



function linear(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; //  O(n)
}
