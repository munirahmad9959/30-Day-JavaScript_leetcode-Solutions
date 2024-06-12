/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortByFunction(arr, fn) {
    let mappedArr = arr.map((element) => [fn(element), element]);

    mappedArr.sort((a, b) => a[0] - b[0]);

    return mappedArr.map((element) => element[1]);
}

console.log(sortByFunction([5, 4, 1, 2, 3], (x) => x)); // Output: [1, 2, 3, 4, 5]
console.log(sortByFunction([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x)); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]
console.log(sortByFunction([[3, 4], [5, 2], [10, 1]], (x) => x[1])); // Output: [[10, 1], [5, 2], [3, 4]]