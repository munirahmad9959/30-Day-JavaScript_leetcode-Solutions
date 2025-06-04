/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    var newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};


//Explanation:
//The above code works like a built-in map function of javascript that, it iterates over each element of the array, applies a callback function to each element, and returns a new array with the results of applying the callback function to each element.
//const numbers = [1, 2, 3, 4, 5];

// Example 1: Doubling each number
//const doubledNumbers = numbers.map(num => num * 2);
//console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

