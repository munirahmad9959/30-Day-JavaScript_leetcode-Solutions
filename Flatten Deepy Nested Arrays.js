/**
 * @param {Array} array 
 * @param {number} depth 
 * @return {Array}
 */
var flat = function (array, n) {
    if (n === 0) return array;
    
    const result = [];
    
    const flatten = (elements, currentDepth = 0) => {
        for (let element of elements) {
            if (Array.isArray(element) && currentDepth < n) {
                flatten(element, currentDepth + 1);
            } else {
                result.push(element);
            }
        }
    };

    flatten(array);
    
    return result;
};



const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 2;

console.log(flat(arr, n));